import React from "react";
import "../styles.css";

export default function GenreFilter({ setGenre }) {
  function onGenreChange(e) {
    setGenre(e.target.value);
  }

  return (
    <>
      <label for="genreFilter" style={{ "margin-right": "7px" }}>
        Genre
      </label>
      <select id="genreFilter" onChange={onGenreChange}>
        <option value="">All</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
      </select>
    </>
  );
}
