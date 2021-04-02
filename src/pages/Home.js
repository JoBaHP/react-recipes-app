import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Header title="amazing recipes">
        <Link
          to="categories"
          className="text-uppercase btn btn-info btn-lg mt-5">
          search meals
        </Link>
      </Header>
    );
  }
}
export default Home;
