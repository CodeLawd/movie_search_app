import React from "react";

import "./MovieCard.scss";

const MovieCard = (movie) => {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
    </div>
  );
};

export default MovieCard;
