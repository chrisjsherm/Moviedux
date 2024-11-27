import React from "react";
import "../styles.css";

export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {curYear} Moviedux, All Rights Reserved.
      </p>
    </footer>
  );
}
