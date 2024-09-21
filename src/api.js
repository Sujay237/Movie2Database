import axios from 'axios';
import './App.css';

const API_KEY = 'your_tmdb_api_key';  // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
