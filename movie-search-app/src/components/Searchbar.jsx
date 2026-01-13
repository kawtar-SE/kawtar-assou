import React from "react";
import "./Searchbar.css";

const Searchbar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="searchbar-input"
      placeholder="Search for a movie..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      
    />

  );
};

export default Searchbar;
