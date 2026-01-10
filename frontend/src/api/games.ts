import Constants from "../config/Constants";
import Environment from "../config/Environment";

const fetchGamesByName = async (searchTerm: string, authToken: string | null) => {

  try {
    const response = await fetch(`${Environment.backendUrl}${Constants.apiRoutes.games}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchTerm: searchTerm,
        authToken: authToken
      })
    });

    if (!response.ok) {
      console.error("Failed to fetch games", response.status, response.statusText);
      return null;
    }

    console.log(response);

    const data = await response.json();
    return data; // dit is een array van game objects met id + name
  } catch (err) {
    console.error("Error fetching games", err);
    return null;
  }
}

export default fetchGamesByName;