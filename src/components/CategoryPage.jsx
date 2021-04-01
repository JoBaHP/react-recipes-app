import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const path = window.location.pathname.slice(1);
  console.log(path);

  const fetchData = async () => {
    const resp = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${path}`
    );
    console.log(resp.data.meals);
    setCategoryData(resp.data.meals);
  };
  console.log(categoryData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <section className="meal-category-section">
          <h2>{path}</h2>
          <section className="category-section">
            {categoryData.map((item, i) => {
              return (
                <section className="category" key={i}>
                  <Link to={`/${path}/${item.strMeal}`}>
                    <p>{item.strMeal}</p>
                    <img src={item.strMealThumb} alt={item.strMeal} />
                  </Link>
                </section>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
