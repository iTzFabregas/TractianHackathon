from pydantic import BaseModel

class OrdemRequest(BaseModel):
    user_message: str

