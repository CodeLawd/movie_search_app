import { useState, useEffect } from "react";

import { Navbar, Hero, Search, MovieContainer } from "./components";

import "./App.scss";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("die");

  let cancel = false;

  const fetchMovies = async (searchQuery) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=53251bbf&s=${searchQuery}`
    );
    const data = await res.json();

    if (cancel) return;
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies(searchQuery);
    return () => (cancel = true);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovies={setMovies}
      />
      {movies.length > 1 && <MovieContainer movies={movies} />}
    </div>
  );
};

export default App;
