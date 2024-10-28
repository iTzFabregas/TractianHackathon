import fitz  # PyMuPDF

def pdf_para_txt(pdf_path, txt_path):
    # Abre o arquivo PDF
    with fitz.open(pdf_path) as pdf:
        texto = ""
        
        # Percorre cada página do PDF
        for pagina in pdf:
            # Extrai o texto da página
            texto += pagina.get_text()

    # Salva o texto extraído em um arquivo TXT
    with open(txt_path, "w", encoding="utf-8") as txt_file:
        txt_file.write(texto)

    print(f"Arquivo TXT criado com sucesso em: {txt_path}")

# Exemplo de uso
pdf_path = "nr12.pdf"  # Caminho do PDF de entrada
txt_path = "nr12.txt"    # Caminho do TXT de saída

pdf_para_txt(pdf_path, txt_path)
