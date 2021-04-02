import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipePage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const path = window.location.pathname.split("/");
  const newPath = path.slice(2);

  const fetchData = async () => {
    const resp = await axios.get(
      ` https://www.themealdb.com/api/json/v1/1/search.php?s=${newPath}`
    );
    console.log(resp.data.meals);
    setRecipeData(resp.data.meals);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <main>
      <section>
        <div className="card" style={{ width: "50%" }}>
          {recipeData.map((item, i) => {
            return (
              <div className="card-body" key={i}>
                <h2 className="card-title">{item.strMeal}</h2>
                <div>
                  <img
                    className="card-img-top"
                    style={{ width: "50%" }}
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                </div>
                <div>
                  <h3 className="card-title">Ingredients</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {item.strMeasure1} {item.strIngredient1}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure2} {item.strIngredient2}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure3} {item.strIngredient3}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure4} {item.strIngredient4}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure5} {item.strIngredient5}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure5} {item.strIngredient5}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure6} {item.strIngredient6}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure7} {item.strIngredient7}{" "}
                      className="list-group-item"
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure8} {item.strIngredient8}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure9} {item.strIngredient9}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure10} {item.strIngredient10}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure11} {item.strIngredient11}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure12} {item.strIngredient12}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure13} {item.strIngredient13}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure14} {item.strIngredient14}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure15} {item.strIngredient15}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure16} {item.strIngredient16}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure17} {item.strIngredient17}
                    </li>
                    <li className="list-group-item">
                      {item.strMeasure18} {item.strIngredient18}
                    </li>
                  </ul>
                  <h3>Instructions</h3>
                  <p className="card-text">{item.strInstructions}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default RecipePage;
