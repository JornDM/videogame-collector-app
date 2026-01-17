import requests
from typing import Dict, List

IGDB_COVERS_URL = "https://api.igdb.com/v4/covers"


def get_cover_map(
    cover_ids: List[str],
    client_id: str,
    auth_token: str
) -> Dict[int, str]:
    """
    Haalt cover URLs op van IGDB en geeft een map terug:
    { cover_id: cover_url }
    """

    if not cover_ids:
        return {}

    response = requests.post(
        IGDB_COVERS_URL,
        headers={
            "Client-ID": client_id,
            "Authorization": f"Bearer {auth_token}",
            "Content-Type": "text/plain"
        },
        data=f"fields id,url; where id = ({','.join(cover_ids)});"
    )

    response.raise_for_status()
    covers = response.json()

    return {cover["id"]: cover["url"] for cover in covers}
