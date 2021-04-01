import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Categories = () => {
  const [categories, setCategories] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
    console.log(resp.data.categories)
    setCategories(resp.data.categories)
  }
  console.log(categories)

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <main>
        <section className="meal-category-section">
          <h2>What are you in the mood for today?</h2>
          <section className="category-section">
            {categories.map((item, i) => {
              return (
                <section className="category" key={i}>
                  <Link to={`/${item.strCategory}`}>
                    <p>{item.strCategory}</p>
                    <img src={item.strCategoryThumb} alt={item.strCategory} />
                  </Link>
                </section>
              )
            })}
          </section>
        </section>
      </main>
    </>
  )
}

export default Categories
