import React from "react";

import { MovieCard } from "..";

import "./MovieContainer.scss";

const MovieContainer = ({ movies }) => {
  return (
    <div className="movie__container">
      <h1> Movie Category</h1>
      <div className="movie__container-box">
        {movies?.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
