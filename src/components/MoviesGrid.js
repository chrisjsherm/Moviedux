import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import RatingFilter from "./RatingFilter";

export default function MoviesGrid({ allMovies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

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
        .filter((movie) => {
          if (ratingFilter === "") {
            return true;
          }
          return movie.rating >= Number.parseFloat(ratingFilter);
        })
    );
  }, [allMovies, searchTerm, genreFilter, ratingFilter]);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-slot">
          <GenreFilter setGenre={setGenreFilter}></GenreFilter>
        </div>
        <div className="filter-slot">
          <RatingFilter setRating={setRatingFilter}></RatingFilter>
        </div>
      </div>

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </>
  );
}
