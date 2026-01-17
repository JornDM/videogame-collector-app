import Constants from "../config/Constants";
import Environment from "../config/Environment";
import { postToBackend } from "../services/apiService";

const apiRouteGames: string = `${Environment.backendUrl}${Constants.apiRoutes.games}`;
const apiRouteGameDetails: string = `${Environment.backendUrl}${Constants.apiRoutes.gameDetails}`;

export const fetchGamesByName = async (searchTerm: string, authToken: string | null) => {

  try {
      return (await postToBackend(apiRouteGames, {
        searchTerm: searchTerm,
        authToken: authToken
      }));
  } catch (err) {
    console.error("Error fetching games", err);
    return null;
  }
}

export const getGameById = async (gameId: number, authToken: string | null) => {
  try {
      return (await postToBackend(apiRouteGameDetails, {
        gameId: gameId,
        authToken: authToken
      }));
  } catch (err) {
    console.error("Error fetching a game by id", err);
    return null;
  }
}
