import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
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
              <Link className="nav-link" to="/ourcontacts">
                Contact Us
              </Link>
            </li>
          </ul>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2 rounded-pill border-end-0 border"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3"
                type="button"
              >
                <i class="fa fa-search"></i>
              </button>
            </span>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
