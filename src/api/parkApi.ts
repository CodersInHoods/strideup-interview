const API_KEY = process.env.REACT_APP_PARKS_API_KEY;
const API_BASE_URL = process.env.REACT_APP_BASE_URL_V1;

export const parkApi = {
  getParks: async (parksListQuery: string) => {
    // add parksListQuery sanatiser
    const response = await fetch(
      `${API_BASE_URL}/parks?parkCode=${parksListQuery}&api_key=${API_KEY}`
    );

    return response.json();
  },
};
