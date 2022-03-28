import { useReducer, useEffect, useState } from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";

export const Filter = ({ allProducts }) => {
  const [categories, setCategories] = useState([]);
  const stars = ["5", "4", "3", "2", "1"];

  useEffect(() => {
    const catName = allProducts.reduce(
      (a, c) => (a.includes(c.categoryName) ? [...a] : [...a, c.categoryName]),
      []
    );
    setCategories(catName);
  }, [allProducts]);

  const { dispatch } = useFilter();

  return (
    <div class="filter-container">
      <div class="filter">
        <h2>Filters</h2>
        <p>Clear</p>
      </div>

      <h2>Price</h2>
      <div class="range">
        <p>50</p>
        <p>150</p>
        <p>200</p>
      </div>
      <input type="range" id="filter-price" min="50" max="150" value="50" />

      <h2>Category</h2>
      {categories.map((el, idx) => {
        return (
          <div key={idx} class="filter-category">
            <input
              type="checkbox"
              name="category"
              id="filter-category"
              onChange={() => dispatch({ type: "CATEGORY", payload: el })}
            />
            <label for="#filter-category">{el}</label>
          </div>
        );
      })}
      <h2>Rating</h2>
      {stars.map((el, idx) => {
        return (
          <div class="filter-rating">
            <input
              type="radio"
              key={idx}
              name="rating"
              id="filter-rating"
              onClick={() => dispatch({ type: "STARS",payload:el})}
            />
            <label for="#filter-rating">{el} star</label>
          </div>
        );
      })}

      <h2>Sort by</h2>
      <div class="filter-sort">
        <input
          type="radio"
          name="sort"
          id="filter-sort"
          onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
        />
        <label for="#filter-sort">Price-Low to High</label>
      </div>
      <div class="filter-sort">
        <input
          type="radio"
          name="sort"
          id="filter-sort"
          onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
        />
        <label for="#filter-sort">Price-High to Low</label>
      </div>
    </div>
  );
};
