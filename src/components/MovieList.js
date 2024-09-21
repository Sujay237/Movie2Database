import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      if (query) {
        const movieResults = await fetchMovies(query);
        setMovies(movieResults);
      }
    };
    getMovies();
  }, [query]);

  return (
    <div className="movie-list">
      <h1>Movie Database</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <Link to={`/movie/${movie.id}`}>More Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
