from pydantic import BaseModel

class GamesRequest(BaseModel):
    searchTerm: str
    authToken: str
