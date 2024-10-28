from pydantic import BaseModel

class OrdemRequest(BaseModel):
    message: str

