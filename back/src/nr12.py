from crewai_tools import PDFSearchTool
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

class Checklist:
    def __init__(self, llm_model="gpt-4o-mini", temperature=0, max_retries=2):
        base_dir = os.path.dirname(os.path.dirname(__file__))  # Sobe um nível de src para back
        doc_path = os.path.join(base_dir, "files", "nr12.pdf")
        
        self.tool = PDFSearchTool(pdf=doc_path)
        self.model = ChatOpenAI(model=llm_model, temperature=temperature, max_retries=max_retries)

        self.rag_question_agent = self.__create_rag_question_agent()
        self.rag_agent = self.__create_pdf_agent()
        self.writer_agent = self.__create_writer_agent()
        self.html_transcriptor_agent = self.__create_html_transcriptor_agent()
        
    def execute(self, message) -> str:
        try:
            rag_question_task = self.__create_rag_question_task(agent=self.rag_question_agent, message=message)
            rag_task = self.__create_rag_task(agent=self.rag_agent, message=message, task_context=[rag_question_task])
            writer_task = self.__create_writer_task(agent=self.writer_agent, message=message, task_context=[rag_task])
            html_transcriptor_task = self.__create_html_transcriptor_task(agent=self.html_transcriptor_agent, task_context=[writer_task])

            crew = self.__create_Crew(agents=[self.rag_question_agent,self.rag_agent,self.writer_agent, self.html_transcriptor_agent],
                                    tasks=[rag_question_task,rag_task,writer_task, html_transcriptor_task])
            
            response = crew.kickoff()

            return response.raw.replace("```html", "").replace("```", "").strip()
        
        except Exception as err:
                raise err

    def __create_rag_question_agent(self) -> Agent:
        rag_question_agent = Agent(
            role = "Redator de Prompts",
            goal = "Escrever prompts otimizados voltados para recuperação de inforamção em arquivos PDF.",
            backstory = """
                Você é um redator especialista em IA Generativa, com prática sênior em escrever prompts otimizados e eficientes.
                Sua área de atuação é na norma de gestão NR12.
                Sua especialidade é receber mensagens genéricas e transformá-las em prompts ideiais para a tarefa de recuperação de informação. 
            """,
            verbose = False,
            max_iter = 10,
            memory = True,
            allow_delegation = False
        )

        return rag_question_agent

    def __create_pdf_agent(self) -> Agent:
        rag_agent = Agent(
            role = "PDF Searcher",
            goal = f"""Faça a recuperação de informações a partir de um arquivo pdf. Leve em conta texto, tabelas e imagens.""",
            backstory = """Você é um especialista em recuperação de informação a partir de pdfs. Sua experiência é de receber uma mensagem e buscar no pdf a melhor parte que se relaciona com isso, seja texto, figura ou tabela.""",
            verbose = False,
            max_iter = 10,
            memory = True,
            tools = [self.tool],
            allow_delegation = False
        )

        return rag_agent

    def __create_writer_agent(self) -> Agent:
        writer_agent = Agent(
            role = "Gerador de Checklist",
            goal = f"""A partir de uma mensagem de requisição, gerar um Checklist detalhado para verificar conformidade com as seções da NR12.""",
            backstory = """
                Você é um assistente que cria checklists detalhados para conformidade de documentos.
                Você é um especialista com mais de 10 anos de experiência na norma de gestão NR12.
                Sua Checklist é uma lista organizada de itens a serem verificados.
                Deve conter linguagem técnica e objetiva.
                Opte por usar tópicos principais e subtópicos quando necessário.
            """,
            verbose = False,
            max_iter = 10,
            memory = True,
            allow_delegation = False
        )

        return writer_agent

    def __create_html_transcriptor_agent(self) -> Agent:
        html_transcriptor_agent = Agent(
            role = "Transcrever Markdown em HTML",
            goal = f"""Transcreva um texto Markdown para HTML.""",
            backstory = """
                Você é um especialista em textos markdown e um códigos HTML.
                Sua especialidade é passar um texto em Markdown para um código HTML.
                Gere apenas a seção <body> do código sem incluir a tag <body>.  
            """,
            verbose = False,
            max_iter = 10,
            memory = True,
            allow_delegation = False
        )

        return html_transcriptor_agent
    
    def __create_rag_question_task(self, agent, message) -> Task:
        rag_question = Task(
            description=f"""
                Com base na mensagem {message}, escreva um prompt otimizado e eficiente para a recuperação de informação na norma de gestão NR12, um arquivo pdf.
            """,
            agent=agent,
            expected_output="Um prompt eficiente para que o modelo llm possa fazer a recuperação de informação no manual.",
        )

        return rag_question

    def __create_rag_task(self, agent, message, task_context:list[Task]) -> Task:
        rag_task = Task(
            description = f"Com base no prompt gerado pelo 'rag question agent' para a mensagem {message}, faça a recuperação de informação com o arquivo pdf levando em consideração a parte mais relevante para a mensagem recebida. O pdf estará em português ou inglês, mas a mensagem de input será em português.",
            agent = agent,
            expected_output = "A parte do pdf mais relevante para o prompt.",
            context=task_context
        )

        return rag_task
    
    def __create_writer_task(self, agent, message, task_context:list[Task]) -> Task:
        writer_task = Task(
           description=f"A partir das informações recuperadas pelo 'rag task' para a mensagem {message}, gere um Checklist em conformidade com a norma de gestão NR12.",  
            agent=agent,
            expected_output="""
                Uma lista organizada de Checklist.
            """,
            context=task_context
        )

        return writer_task

    def __create_html_transcriptor_task(self, agent, task_context:list[Task]) -> Task:
        html_transcriptor_task = Task(
           description=f"Com base no texto formato Markdown gerado pelo 'writer task', transcreva esse texto para umc ódigo html, mantendo os índices do texto utilizando as tags do HTML.",  
            agent=agent,
            expected_output="""
                Código HTML, apenas a parte da seção <body> sem incluir a tag <body>, com a transcrição do texto Markdown.
            """,
            context=task_context
        )

        return html_transcriptor_task
    
    def __create_Crew(self, agents:list[Agent], tasks:list[Task]) -> Crew:
        crew = Crew(
            agents=agents,
            tasks=tasks,
            verbose = False,
            process=Process.hierarchical,
            full_output=True,
            share_crew=False,
            manager_llm=self.model,
            max_iter=10,
        )

        return crew


if __name__ == "__main__":
    message = {"message": "É necessário verificar o estado da máquina CNC, ela está fazendo um barulho esquisito. Preciso do passo a passo da verificação, EPIs, ferramentas necessárias."}

    response = Checklist().execute(message=message)
    print(response)
    print(type(response))

