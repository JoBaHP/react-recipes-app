import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    const resp = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log(resp.data.categories);
    setCategories(resp.data.categories);
  };
  console.log(categories);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main>
        <section>
          <h2 className="text-uppercase" style={{ textAlign: "center" }}>
            You can choose a category!
          </h2>
          <div className="card-columns">
            {categories.map((item, i) => {
              return (
                <div className="card mb-3" style={{ width: "18rem" }} key={i}>
                  <Link to={`/${item.strCategory}`}>
                    <img
                      className="card-img-top"
                      src={item.strCategoryThumb}
                      alt={item.strCategory}
                    />
                    <p className="card-text">{item.strCategory}</p>
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

export default Categories;
