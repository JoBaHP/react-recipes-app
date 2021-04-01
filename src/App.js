import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import RecipePage from "./components/RecipePage";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/:category" component={CategoryPage}></Route>
            <Route
              exact
              path="/:category/:recipe"
              component={RecipePage}
            ></Route>
            <Route component={Default} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
