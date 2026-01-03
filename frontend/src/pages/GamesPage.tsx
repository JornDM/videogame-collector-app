import GamesSearch from "../components/GamesSearch/GamesSearch";
import { GamesApiAuth } from "../auth/gamesApiAuth";

import fetchGamesByName from "../api/games";
import Constants from "../config/Constants";

async function searchButtonClickHandler(): Promise<void> {
  const authToken = await GamesApiAuth();
  console.log("Auth Token:", authToken);

  const games = await fetchGamesByName(Constants.twitchAppConfig.twitchAppClientId, authToken);
  console.log("Fetched Games:", games);
}

const GamesPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Find a game</h1>
      <GamesSearch />
      <button onClick={searchButtonClickHandler}>testing</button>
    </div>
  );
};

export default GamesPage;
