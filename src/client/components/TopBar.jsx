import React from "react";
import { Link } from "react-router-dom";
import '../styles/TopBar.css';

const TopBar = () => {
  
  return (
    <header>
      <Link to="/" className="header-link">
        Home
      </Link>
    </header>
  );
};

export default TopBar;