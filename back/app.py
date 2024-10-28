from fastapi import FastAPI, HTTPException
from time import time
from models import OrdemRequest
from src.ordem_procedencia import OrdemProcedencia
from src.nr12 import Checklist
from log import logger, LoggerMessages
import os
from dotenv import load_dotenv

load_dotenv()

# Criar servidor
app = FastAPI()

# rotas da aplicacao
@app.post("/os")
async def get_os(request: OrdemRequest) -> dict:
    start_time = time()

    try:
        message = {"message": request.message}

        response = Checklist().execute(message=message)

        return {"Response": response}

    except Exception as err:
        logger.error(err)
        raise HTTPException(status_code=500, detail="Internal Server Error")
    
    finally:
        end_time = time()
        duration = end_time - start_time
        logger.info(LoggerMessages.time_info(duration=duration))

@app.post("/ordem-procedencia")
async def get_ordem_procedencia(request: OrdemRequest) -> dict:
    start_time = time()

    try:
        message = {"message": request.message}

        response = OrdemProcedencia().execute(message=message)

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
    uvicorn.run(app, host=os.getenv("HOST"), port=int(os.getenv("PORT")))