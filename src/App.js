import { useState, useEffect } from "react";

import { Navbar, Hero, Search, MovieContainer } from "./components";

import "./App.scss";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("die");
  const [loading, setLoading] = useState(false);

  // let cancel = false;

  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=53251bbf&s=${searchQuery}`
    );
    const data = await res.json();

    // if (cancel) return;
    setMovies(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(searchQuery);
    // return () => (cancel = true);
  }, [searchQuery]);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMovies={setMovies}
      />
      {loading && (
        <h3 style={{ paddingLeft: "77px", paddingBottom: "20px" }}>
          {" "}
          Loading...{" "}
        </h3>
      )}
      {movies.length > 1 && <MovieContainer movies={movies} />}
      {movies.length > 1 && <MovieContainer movies={movies} />}
    </div>
  );
};

export default App;
