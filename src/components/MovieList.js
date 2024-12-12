import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {movies.map((movie) => (
      <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-item">
        <div>
          <img src={movie.Poster} alt={movie.Title} className="w-full" />
          <h3 className="text-lg font-bold">{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default MovieList;