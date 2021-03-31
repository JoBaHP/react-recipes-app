import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import Category from "./pages/Category";
import MyMeal from "./pages/MyMeal";
import Search from "./pages/Search";
import Default from "./pages/Default";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/meal/:id" component={Meal}></Route>
          <Route path="/category" exact component={Category}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/mymeal" component={MyMeal}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/contact" component={ContactUs}></Route>
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
