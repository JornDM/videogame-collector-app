import os
from dotenv import load_dotenv
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from classes.GamesRequest import GamesRequest

# Load .env
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(env_path)

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
    client_id = os.getenv("twitchAppClientId")
    auth_token = payload.authToken
    search_terms = payload.searchTerm.strip()

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

    if not cover_ids:
        return [
            {
                "id": game.get("id"),
                "name": game.get("name"),
                "summary": game.get("summary"),
                "coverUrl": None
            }
            for game in videogames
        ]

    covers_response = requests.post(
        IGDB_COVERS_URL,
        headers={
            "Client-ID": client_id,
            "Authorization": f"Bearer {auth_token}",
            "Content-Type": "text/plain"
        },
        data=f"fields id,url; where id = ({','.join(cover_ids)});"
    )

    covers_response.raise_for_status()
    covers = covers_response.json()

    cover_map = {cover["id"]: cover["url"] for cover in covers}

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

