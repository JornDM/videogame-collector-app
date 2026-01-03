import Constants from "../config/Constants";

const fetchGamesByName = async (name: string, authToken: string | null) => {
    const query = `
    fields name;
    limit 10;
    `;

  try {
    const response = await fetch(`${Constants.gamesApiConfig.gamesApiBaseUrl}${Constants.gamesApiConfig.gamesEndpointName}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Client-ID": Constants.twitchAppConfig.twitchAppClientId,
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "text/plain"
      },
      body: query.trim()
    });

    if (!response.ok) {
      console.error("Failed to fetch games", response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    return data; // dit is een array van game objects met id + name
  } catch (err) {
    console.error("Error fetching games", err);
    return null;
  }
}

export default fetchGamesByName;