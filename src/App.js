import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

