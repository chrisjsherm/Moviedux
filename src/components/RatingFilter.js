import React from "react";
import "../styles.css";

export default function RatingFilter({ setRating }) {
  function onRatingChange(e) {
    setRating(e.target.value);
  }

  return (
    <>
      <label for="ratingFilter" style={{ "margin-right": "7px" }}>
        Minimum Rating
      </label>
      <select
        id="ratingFilter"
        className="filter-dropdown"
        onChange={onRatingChange}
      >
        <option value="">Any</option>
        <option value="8">Good</option>
        <option value="5">Okay</option>
      </select>
    </>
  );
}
