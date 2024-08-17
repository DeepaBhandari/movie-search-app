import axios from "axios";

// const API_KEY = process.env.MOVIE_SEARCH_APP_OMDB_API_KEY;
const API_KEY = "4feb8896";
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}?=${API_KEY}&s=${query}`);
  return response.data;
};

export const fetchMovieDetail = async (id: string) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return response.data;
};
