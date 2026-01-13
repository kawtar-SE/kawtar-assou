import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "521336da";


const popularIDs = [
  "tt1375666", // Inception
  "tt0816692", // Interstellar
  "tt0468569", // The Dark Knight
  "tt0499549", // Avatar
  "tt0111161", // Shawshank
  "tt0137523", // Fight Club
  "tt0120737", // Lord of the Rings: Fellowship
  "tt0109830", // Forrest Gump
  "tt0088763", // Back to the Future
  "tt0076759", // Star Wars: A New Hope
];

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const requests = popularIDs.map((id) =>
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then((res) => res.json())
        );

        const results = await Promise.all(requests);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "20px",}}>
      <h2>Popular Movies</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
