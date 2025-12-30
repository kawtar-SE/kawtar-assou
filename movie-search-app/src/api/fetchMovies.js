const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // create .env file
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  if (!query) return [];

  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await res.json();
    console.log("OMDB RESPONSE:", data);

    if (data.Response === "True") {
      return data.Search;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error fetching movies:", err);
    return [];
  }
};
