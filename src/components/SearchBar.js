import React from "react";
import "../styles.css";

export default function SearchBar(props) {
  const handleSearchChange = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleSearchChange}
      className="search-input"
      placeholder="Search movies..."
    />
  );
}
