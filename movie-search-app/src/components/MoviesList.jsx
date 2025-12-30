import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../api/fetchMovies";

const MoviesList = ({ query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const loadMovies = async () => {
      const data = await fetchMovies(query);
      setMovies(data);
    };

    loadMovies();
  }, [query]);

return (
  <div className="movies-container">
    {movies.length > 0 &&
      movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
    }
  </div>
);

};

export default MoviesList;
