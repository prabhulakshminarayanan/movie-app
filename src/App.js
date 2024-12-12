import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => (
  <Router>
    <div className="app">
      <h1 className="text-center text-4xl font-bold py-4">OMDB Movie Search</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;