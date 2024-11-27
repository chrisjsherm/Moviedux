import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";

export default function MoviesGrid() {
  const [allMovies, setAllMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState("");

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
      allMovies
        .filter((movie) => {
          if (genreFilter === "") {
            return true;
          }

          return movie.genre.toLowerCase() === genreFilter.toLowerCase();
        })
        .filter((movie) => {
          return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
    );
  }, [allMovies, searchTerm, genreFilter]);

  return (
    <>
      <GenreFilter setGenre={setGenreFilter}></GenreFilter>

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </>
  );
}
