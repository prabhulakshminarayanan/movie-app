import axios from 'axios';

const OMDB_API_KEY = 'c353b0e4';
const BASE_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}&page=${page}${type ? `&type=${type}` : ''}`);
    if (response.data.Response === 'True') {
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${id}`);
    if (response.data.Response === 'True') {
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw error;
  }
};
