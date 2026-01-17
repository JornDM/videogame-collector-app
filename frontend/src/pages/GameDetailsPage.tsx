import React from "react";
import { useSearchParams } from "react-router-dom";
import { getGameById } from "../api/games";
import { GamesApiAuth } from "../auth/gamesApiAuth";



const GameDetailsPage = () => {
        const gameId: number = Number(searchParams.get("gameId"));
        const [searchParams] = useSearchParams();

        const {fetchedGameWithDetails, setFetchedGameWIthDetails} = React.useState()

    return (
        <div>
            <p>This is a test!</p>
            <button onClick={getGameById(gameId)}>testing jimmy</button>
        </div>
       
    )
}

export default GameDetailsPage;