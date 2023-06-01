import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="https://th.bing.com/th/id/OIP.MB6SZk1S22QNkbuVQTyGgQHaHa?pid=ImgDet&rs=1" alt="Cricbuzz Logo" style={{width: 50,
  height: 50
}} /> */}
          <h2>CricketUpdates</h2>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link className="nav-link text-white fs-5" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link text-white fs-5" to="/news">News</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link text-white fs-5" to="/matches">Matches</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link text-white fs-5" to="/series">Series</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link text-white fs-5" to="/playersRankings/odi">Rankings</Link>
        </li>
       
        <li className="navbar-item">
          <Link className="nav-link text-white fs-5" to="/players">Players</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
