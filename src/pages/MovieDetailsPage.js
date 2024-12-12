import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsPage = () => {
  const { id } = useParams();
  return <MovieDetails id={id} />;
};

export default MovieDetailsPage;