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
  }, []);
  return (
    <main>
      <section className="meal-category-section">
        <section className="recipe-section">
          {recipeData.map((item, i) => {
            return (
              <section className="recipe" key={i}>
                <section className="recipe-header">
                  <h2>{item.strMeal}</h2>
                  <img src={item.strMealThumb} alt={item.strMeal} />
                </section>
                <section className="how-to-make">
                  <h3>Ingredients</h3>
                  <ul className="ingredients">
                    <li>
                      {item.strMeasure1} {item.strIngredient1}
                    </li>
                    <li>
                      {item.strMeasure2} {item.strIngredient2}
                    </li>
                    <li>
                      {item.strMeasure3} {item.strIngredient3}
                    </li>
                    <li>
                      {item.strMeasure4} {item.strIngredient4}
                    </li>
                    <li>
                      {item.strMeasure5} {item.strIngredient5}
                    </li>
                    <li>
                      {item.strMeasure5} {item.strIngredient5}
                    </li>
                    <li>
                      {item.strMeasure6} {item.strIngredient6}
                    </li>
                    <li>
                      {item.strMeasure7} {item.strIngredient7}
                    </li>
                    <li>
                      {item.strMeasure8} {item.strIngredient8}
                    </li>
                    <li>
                      {item.strMeasure9} {item.strIngredient9}
                    </li>
                    <li>
                      {item.strMeasure10} {item.strIngredient10}
                    </li>
                    <li>
                      {item.strMeasure11} {item.strIngredient11}
                    </li>
                    <li>
                      {item.strMeasure12} {item.strIngredient12}
                    </li>
                    <li>
                      {item.strMeasure13} {item.strIngredient13}
                    </li>
                    <li>
                      {item.strMeasure14} {item.strIngredient14}
                    </li>
                    <li>
                      {item.strMeasure15} {item.strIngredient15}
                    </li>
                    <li>
                      {item.strMeasure16} {item.strIngredient16}
                    </li>
                    <li>
                      {item.strMeasure17} {item.strIngredient17}
                    </li>
                    <li>
                      {item.strMeasure18} {item.strIngredient18}
                    </li>
                    <li>
                      {item.strMeasure19} {item.strIngredient19}
                    </li>
                    <li>
                      {item.strMeasure20} {item.strIngredient20}
                    </li>
                  </ul>
                  <h3>Instructions</h3>
                  <p className="instructions">{item.strInstructions}</p>
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default RecipePage;
