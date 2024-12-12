import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/api';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDetails();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} className="w-full" />
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <p>Release Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Ratings: {movie.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`).join(', ')}</p>
      <p>Cast: {movie.Actors}</p>
    </div>
  );
};

export default MovieDetails;