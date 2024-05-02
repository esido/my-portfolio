import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
        <a href="" className="nav-logo">Jas.dev</a>
        <ul className="nav-menu">
          <li>
            <NavLink  className="nav-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
          </li>
          <li> 
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
