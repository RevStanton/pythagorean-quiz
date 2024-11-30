import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/quiz" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Take the Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/principles" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Principles Explained
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/results" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
