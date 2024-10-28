from fastapi import FastAPI, HTTPException
from time import time
from models import OrdemRequest
from src.ordem_procedencia import OrdemProcedencia
from TractianHackathon.back.server.log import logger, LoggerMessages
from dotenv import load_dotenv

load_dotenv()

# Criar servidor
app = FastAPI()

# rotas da aplicacao
@app.post("/os/")
async def get_os(request: OrdemRequest) -> dict:
    start_time = time()

    try:
        message = {"message": request.message}

        response

    except Exception as err:
        logger.error(err)
        raise HTTPException(status_code=500, detail="Internal Server Error")
    
    finally:
        end_time = time()
        duration = end_time - start_time
        logger.info(LoggerMessages.time_info(duration=duration))



@app.post("/ordem-procedencia/")
async def get_ordem_procedencia(request: OrdemRequest) -> dict:
    start_time = time()

    try:
        message = {"message": request.message}
        
        doc_path = r"C:\Users\Pedro\OneDrive - Daimon Engenharia e Sistemas\Documentos\Development\TractianHackathon\back\files\WEG-w22-three-phase-electric-motor-50029265-brochure-english-web.pdf"

        response = OrdemProcedencia(doc_path=doc_path).execute(message=message)

        return {"Response": response}

    except Exception as err:
        logger.error(err)
        raise HTTPException(status_code=500, detail="Internal Server Error")
    
    finally:
        end_time = time()
        duration = end_time - start_time
        logger.info(LoggerMessages.time_info(duration=duration))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)