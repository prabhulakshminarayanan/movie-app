import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import { fetchMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1);
    try {
      const data = await fetchMovies(searchQuery, 1, filterType);
      setMovies(data.Search);
      setTotalResults(parseInt(data.totalResults, 10));
    } catch (error) {
      setError(error.message);
    }
  };
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    try {
      const data = await fetchMovies(query, page, filterType);
      setMovies(data.Search);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFilterChange = async (type) => {
    setFilterType(type);
    setCurrentPage(1);
    try {
      const data = await fetchMovies(query, 1, type);
      setMovies(data.Search);
      setTotalResults(parseInt(data.totalResults, 10));
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <select onChange={(e) => handleFilterChange(e.target.value)} className="select select-bordered">
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
      {error && <div>Error: {error}</div>}
      {movies.length > 0 ? (
        <>
          <MovieList movies={movies} />
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default Home;
