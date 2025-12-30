import React, { useState } from "react";
import MoviesList from "../components/MoviesList";
import SearchBar from "../components/Searchbar";


const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div style={{ 
        padding: "20px",
        textAlign:"center",

     }}>
      <h1 style={{color:"black",marginBottom:"20px"}}>Movie Search App</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <MoviesList query={query} />
    </div>

  );
};

export default Home;
