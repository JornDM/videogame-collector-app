export const postToBackend = async (endpointPath: string, body: any): Promise<any> => {
    try {
    const response = await fetch(endpointPath, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.error("Failed to fetch games", response.status, response.statusText);
      return null;
    }

    console.log(response);

    const data = await response.json();
    return data; 
    } catch (error) {
        console.error("Error while sending post call to backedn;;;", err);
        return null;
    }
}