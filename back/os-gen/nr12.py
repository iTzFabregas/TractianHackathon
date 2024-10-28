from openai import OpenAI

client = OpenAI()

def read_file(file_path):
    """Lê o conteúdo de um arquivo de texto."""
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def generate_checklist(request_text, nr12_text):
    prompt = (
        """Com base no seguinte documento NR12 e na requisição, gere um 
        checklist, em HTML, detalhado para verificar conformidade com as seções da NR12:\n\n
        f"Documento NR12:\n{nr12_text}\n\n
        f"Requisição:\n{request_text}\n\n
        Responda com uma lista organizada de itens a serem verificados, separados em 
        tópicos principais e subtópicos quando necessário.
        """
    )

    messages = [
            {"role": "system", "content": "Você é um assistente que cria checklists detalhados para conformidade de documentos."},
            {"role": "user", "content": prompt}
            ]


    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        temperature=0.2
    )

    checklist = response.choices[0].message.content

    return checklist

nr12_file_path = "nr12.txt"  
request_file_path = "request.txt"

nr12_text = read_file(nr12_file_path)
request_text = read_file(request_file_path)

checklist = generate_checklist(request_text, nr12_text)

# Imprimir o checklist gerado
print("Checklist Gerado:\n", checklist)
