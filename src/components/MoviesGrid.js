import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

export default function MoviesGrid() {
  const [allMovies, setAllMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  allMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setAllMovies(data);
        return data;
      });
  }, []);

  useEffect(() => {
    setFilteredMovies(
      allMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, allMovies]);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </>
  );
}
