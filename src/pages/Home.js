import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Header title="Meal Aplication">
        <Link to="search" className="text-uppercase btn btn-info btn-lg mt-5">
          search for meals
        </Link>
      </Header>
    );
  }
}

export default Home;
