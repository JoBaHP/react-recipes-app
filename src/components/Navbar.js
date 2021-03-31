import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <h5>Meals app</h5>
        </Link>
        <div className="collapse navbar-collapse show ml-sm-5">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
