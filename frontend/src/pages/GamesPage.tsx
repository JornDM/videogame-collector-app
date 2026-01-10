import { GamesApiAuth } from "../auth/gamesApiAuth";

import fetchGamesByName from "../api/games";
import React from "react";
import type Videogame from "../types/Videogame";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import type ErrorObject from "../types/ErrorObject";
import GamesList from "../components/GamesList/GamesList";

const GamesPage = () => {
  const [enteredSearchTerm, setEnteredSearchTerm] = React.useState<string>("");
  const [retrievedVideoGames, setRetrievedVideoGames] = React.useState<Videogame[]>([]);
  const [isLoadingGamesRetrieval, setIsLoadingGamesRetrieval] = React.useState<boolean>(false);
  const [errorObject, setErrorObject] = React.useState<ErrorObject>({errorMessage: "", errorOccurred: false});
  const [gamesWereSearched, setGamesWereSearched] = React.useState<boolean>(false);



  async function searchButtonClickHandler(searchTerm: string): Promise<void> {
    try {
        setRetrievedVideoGames([]);
        setIsLoadingGamesRetrieval(true);
        setGamesWereSearched(true);
        const authToken = await GamesApiAuth();

        const games: Videogame[] = await fetchGamesByName(searchTerm, authToken);
        setRetrievedVideoGames(games)
    } catch (error: any) {
      setErrorObject({
        errorOccurred: true,
        errorMessage: error.message
      })
    } 
    finally {
        setIsLoadingGamesRetrieval(false);
    }


  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Find a game</h1>
      <p>Use the search bar below to find your game!</p>
      <input type="text" onChange={(event) => setEnteredSearchTerm(event.target.value)} disabled={isLoadingGamesRetrieval}/>
      <button onClick={() => searchButtonClickHandler(enteredSearchTerm)} disabled={isLoadingGamesRetrieval}>testing</button>

      {/* If some api calls are loading, we display the loading animation */}
      {isLoadingGamesRetrieval && <LoadingSpinner/>}
      {
        retrievedVideoGames.length === 0 && gamesWereSearched && !isLoadingGamesRetrieval && (<p>We couldn't find any games matching your search terms...</p> )
      }

      {/* If we found any games, render them. */}
      {retrievedVideoGames.length > 0 && <GamesList VideogamesList={retrievedVideoGames}/>}

      {errorObject.errorOccurred && <p>An error occurred while trying to retrieve your games. Please try again later.</p>}
    </div>
  );
};

export default GamesPage;
