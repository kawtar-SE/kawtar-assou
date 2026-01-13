import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "521336da"; // khalli key dyalk

const topRatedIDs = [
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0071562", // The Godfather: Part II
  "tt0468569", // The Dark Knight
  "tt0050083", // 12 Angry Men
  "tt0108052", // Schindler's List
  "tt0110912", // Pulp Fiction
  "tt0060196", // The Good, the Bad and the Ugly
  "tt0137523", // Fight Club
];

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const promises = topRatedIDs.map((id) =>
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
          .then((res) => res.json())
      );
      const results = await Promise.all(promises);
      setMovies(results);
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;
