import os
from dotenv import load_dotenv
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

# Models & Classess
from classes.GamesRequest import GamesRequest
from classes.GameDetailsRequest import GameDetailsRequest

# Services
from services.games_covers_service import get_cover_map

# Load .env & other constants
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(env_path)

client_id = os.getenv("twitchAppClientId")

# FastAPI setup
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev only
    allow_methods=["*"],
    allow_headers=["*"]
)


# IGDB endpoint
IGDB_URL = "https://api.igdb.com/v4/games"
IGDB_COVERS_URL = "https://api.igdb.com/v4/covers"

@app.post("/api/games")
def get_games_by_search_term(payload: GamesRequest):

    auth_token = payload.authToken
    search_terms = payload.searchTerm.strip()

    print(auth_token)
    print(search_terms)

    videogames_response = requests.post(
        IGDB_URL,
        headers={
            "Client-ID": client_id,
            "Authorization": f"Bearer {auth_token}",
            "Content-Type": "text/plain"
        },
        data=f'search "{search_terms}"; fields id,name,summary,cover;'
    )

    videogames_response.raise_for_status()
    videogames = videogames_response.json()

    if not videogames:
        return []

    cover_ids = [str(game["cover"]) for game in videogames if "cover" in game]

    cover_map = get_cover_map(
        cover_ids=cover_ids,
        client_id=client_id,
        auth_token=auth_token
    )

    return [
        {
            "id": game.get("id"),
            "name": game.get("name"),
            "summary": game.get("summary"),
            "coverUrl": f"https:{cover_map.get(game.get('cover'))}"
            if game.get("cover") in cover_map
            else None
        }
        for game in videogames
    ]

# @app.post("/api/gameDetails")
# def get_game_details_by_id(payload: GameDetailsRequest):
#     print(payload)
