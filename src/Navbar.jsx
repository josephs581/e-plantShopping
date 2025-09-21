import React from "react";
import "./App.css";

function Navbar({ onHomeClick, onPlantsClick, onCartClick }) {
  return (
    <nav className="navbar">
      <h2 className="logo" onClick={onHomeClick}>
        Paradise Nursery
      </h2>
      <ul className="nav-links">
        <li onClick={onPlantsClick}>Plants</li>
        <li onClick={onCartClick}>🛒</li>
      </ul>
    </nav>
  );
}

export default Navbar;
