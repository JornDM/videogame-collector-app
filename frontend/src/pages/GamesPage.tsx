import { GamesApiAuth } from "../auth/gamesApiAuth";

import fetchGamesByName from "../api/games";
import React from "react";


async function searchButtonClickHandler(searchTerm: string): Promise<void> {
  const authToken = await GamesApiAuth();
  console.log("Auth Token:", authToken);

  const games = await fetchGamesByName(searchTerm, authToken);
  console.log("Fetched Games:", games);
}



const GamesPage = () => {
  const [enteredSearchTerm, setEnteredSearchTerm] = React.useState<string>("");
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Find a game</h1>
      <p>Use the search bar below to find your game!</p>
      <input type="text" onChange={(event) => setEnteredSearchTerm(event.target.value)} />
      <button onClick={() => searchButtonClickHandler(enteredSearchTerm)}>testing</button>
    </div>
  );
};

export default GamesPage;
