import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import MovieList from './components/MovieList'; // Import the MovieList component
import MovieDetails from './components/MovieDetails'; // Import the MovieDetails component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} /> {/* Use 'element' instead of 'component' */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
