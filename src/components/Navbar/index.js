import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Nav from "react-bootstrap/Navbar"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <Nav className="navbar sticky-top navbar-light font-weight-light">
      <Link className="navbar-brand" to="/">
        SKYLER DAKOTA LAWTON
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
    </Nav>
  );
}

export default Navbar;
