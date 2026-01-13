import React from "react";
import "./searchbar.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
      />
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
