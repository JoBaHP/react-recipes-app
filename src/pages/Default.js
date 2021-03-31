import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light text-uppercase">You Are On Wrong Page</h2>
        <Link to="/" className="text-uppercase btn btn-danger btn-lg mt-5">
          go home
        </Link>
      </Header>
    );
  }
}

export default Default;
