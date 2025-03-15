const API_KEY = "8316fd578c3a0a9e32c925afbf2ae68c";
const BASE_URL = "https://api.themoviedb.org/3";

// basically wait for the fetch to finish and then return the data
export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
