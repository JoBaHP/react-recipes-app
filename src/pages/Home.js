import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Header title="amazing recipes">
        <Link
          to="categories"
          className="text-uppercase btn btn-info btn-lg mt-3"
        >
          search recipes
        </Link>
      </Header>
    );
  }
}
