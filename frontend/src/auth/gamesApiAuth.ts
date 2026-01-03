import Constants from "../config/Constants";
import type { GamesApiResponse } from "../interfaces/gamesApiResponse";

export const GamesApiAuth = async (): Promise<string | null> => {
    const endpointUrl: string = `https://id.twitch.tv/oauth2/token?client_id=${Constants.twitchAppConfig.twitchAppClientId}&client_secret=${Constants.twitchAppConfig.twitchAppClientSecret}&grant_type=client_credentials`;

    try {
        const response = await fetch(endpointUrl, {
            method: 'POST'
        });

        if (!response.ok) {
            console.log('Failed to authenticate with Twitch API', response.status, response.statusText);
            return null;
        }

        // Parse JSON en cast naar type
        const data: GamesApiResponse = await response.json();

        // Extra check (optioneel)
        if (!data.access_token || !data.expires_in || !data.token_type) {
            console.log('Invalid Twitch API response', data);
            return null;
        }

        return data.access_token;
    } catch (error) {
        console.log('An error occurred while authenticating with the Games API');
        console.log(error);
        return null;
    }
};
