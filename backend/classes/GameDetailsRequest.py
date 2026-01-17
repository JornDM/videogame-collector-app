from pydantic import BaseModel

class GameDetailsRequest(BaseModel):
    gameId: int
    authToken: str