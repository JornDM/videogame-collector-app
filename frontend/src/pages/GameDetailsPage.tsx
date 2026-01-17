import React from "react";
import { useSearchParams } from "react-router-dom";
import { getGameById } from "../api/games";
import { useGamesAuth } from "../auth/GamesAuthContext";


const GameDetailsPage = () => {
        const [searchParams] = useSearchParams();
          const {igdbToken} = useGamesAuth();
        
        const [isError, setIsError] = React.useState<boolean>(false);

        const gameId: number = Number(searchParams.get("gameId"));

        const [fetchedGameWithDetails, setFetchedGameWIthDetails] = React.useState()

        const handleGameByIdRetrieval = async () => {
            try {
                const gameWithDetails = await getGameById(gameId, igdbToken);
                setFetchedGameWIthDetails(gameWithDetails)
            } catch (error: any) {
                setIsError(true);
                console.error(error);
            }
        }

    return (
        <div>
            <p>This is a test!</p>
            <button onClick={async () => await handleGameByIdRetrieval()}>testing jimmy</button>
        </div>
       
    )
}

export default GameDetailsPage;