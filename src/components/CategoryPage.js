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
        <section>
          <h2>{path}</h2>
          <div className="card-columns">
            {categoryData.map((item, i) => {
              return (
                <div class="card" style={{ width: "18rem" }} key={i}>
                  <Link to={`/${path}/${item.strMeal}`}>
                    <img
                      className="card-img-top"
                      src={item.strMealThumb}
                      alt={item.strMeal}
                    />
                    <p className="card-text">{item.strMeal}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
