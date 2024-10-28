from crewai_tools import YoutubeVideoSearchTool
from crewai import Agent, Task, Crew, Process
from googleapiclient.discovery import build
from langchain_openai import ChatOpenAI
import os

from dotenv import load_dotenv

load_dotenv() 

class ReportYtAgent:
    def __init__(self, video_id:str="-2nmXa-DHEk", model_name:str="gpt-4o-mini", temperature:float=0, max_retries:int=2):

        self.tool = YoutubeVideoSearchTool(youtube_video_url=f'https://www.youtube.com/watch?v={video_id}')
        self.model = ChatOpenAI(model=model_name, temperature=temperature, max_retries=max_retries)
        self.id = video_id
        self.metadata_fields = ['title']
        
        self.metadata = self.__get_metadata()

        self.transcriptor_agent = self.__create_transcriptor_agent()
        self.writer_agent = self.__create_writer_agent()

    def execute(self) -> str:
        try:
            
            task_transcript = self.__create_task_transcription(agent=self.transcriptor_agent)
            task_write = self.__create_task_write(agent=self.writer_agent, task_context=[task_transcript])
            
            crew = self.__create_Crew(agents=[self.transcriptor_agent, self.writer_agent],
                                           tasks=[task_transcript, task_write])

            response = crew.kickoff()

            return response.raw
        
        except Exception as err:
            raise err

    def __create_transcriptor_agent(self) -> Agent:
        transcriptor_agent = Agent(
            role = "Transcrição de Vídeo",
            goal = f"""Forneça a transcrição de vídeos. Faça isso para que seja possível criar um resumo do vídeo, ressaltando inforamções técnicas e objetivas.""",
            backstory = """
                Você é um analista altamente especializado em máquinas do setor metalúrgico.
                Sua principal habilidade é fazer a transcrição de vídeos
                Seja técnico, objetivo e respeite a norma culta da língua portuguesa.""",
            verbose = False,
            llm = self.model,
            max_iter = 10,
            memory = True,
            tools = [self.tool],
            allow_delegation = False
        )

        return transcriptor_agent

    def __create_writer_agent(self) -> Agent:
        writer_agent = Agent(
            role = "Redator de Relatório",
            goal = """Escreva um resumo ténico, objetico e conciso sobre uma transcrição de um vídeo. Deve-se ressaltar informações de usabilidade e propriedades.""",
            backstory = """
                Você é um analista altamente especializado com mais de 10 anos de experiência no setor de metalurgia brasileiro.
                Seu foco principal é em resumir vídeos sobre máquinas e peças.
                Seus resumos são técnicos e precisos.
                O foco de seus resumos é para que funcionários técnicos leiam e, assim, não precisem ver o vídeo ou acessarem outros meio para entender como atuar com máquina ou peça.""",
            verbose = False,
            llm = self.model,
            max_iter = 10,
            memory = True,
            allow_delegation = False
        )

        return writer_agent
    
    def __create_task_transcription(self, agent:Agent) -> Task:
        get_yt_transcription = Task(
            description = f"""Busque a transcrição do vídeo {self.metadata['title']} no YouTube. Corrija eventuais erros ortográficos ou gramaticais.""",
            agent = agent,
            expected_output = "A transcrição do vídeo obtida."
        )

        return get_yt_transcription

    def __create_task_write(self, agent:Agent, task_context:list[Task]) -> Task:
        writer = Task(
            description=f"""Com base na transcrição obtida pelo 'task_transcript', gere um resumo técnico, objetivo e sucinto, ressaltando informações de usabilidade e propriedades da máquina.""",
            agent=agent,
            expected_output=f"""
                Resumo elaborado.
            """,
            context=task_context
        )

        return writer
    
    def __create_Crew(self, agents:list[Agent], tasks:list[Task]) -> Crew:
        crew = Crew(
            agents=agents,
            tasks=tasks,
            verbose=False,
            process=Process.hierarchical,
            full_output=True,
            share_crew=False,
            manager_llm=self.model,
            max_iter=20,
        )

        return crew
    
    def __get_metadata(self) -> dict:
        yt = build('youtube', 'v3', developerKey=os.getenv("DEVELOPER_KEY"))
        response = yt.videos().list(id=self.id, part='snippet').execute()

        metadata = {f"{field}":response['items'][0]['snippet'].get(field) for field in self.metadata_fields}

        return metadata
    
if __name__ == '__main__':
    agent = ReportYtAgent()
    report = agent.execute()
    print(report)