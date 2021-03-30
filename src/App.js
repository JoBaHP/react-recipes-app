import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Meal from "./pages/Meal";

import Category from "./pages/Category";
import MyMeal from "./pages/MyMeal";
import Search from "./pages/Search";
import Default from "./pages/Default";

const App = () => {
  return (
    <div>
      <Home />
      <Meal />
      <Category />
      <MyMeal />
      <Search />
      <Default />
    </div>
  );
};

export default App;
