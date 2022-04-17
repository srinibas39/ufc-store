import { useReducer, useEffect, useState } from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";

export const Filter = ({ allProducts }) => {
  const [categories, setCategories] = useState([]);
  const stars = ["5", "4", "3", "2", "1"];
  const [clear, setClear] = useState(false);
  useEffect(() => {
    const catName = allProducts.reduce(
      (a, c) => (a.includes(c.categoryName) ? [...a] : [...a, c.categoryName]),
      []
    );
    setCategories(catName);
    setClear(true);
  }, [allProducts, clear]);

  const { dispatch } = useFilter();

  const handleClear = () => {
    dispatch({type: "CLEAR"});
    setClear(false);
  };

  return (
    clear && (
      <div className="filter-container">
        <div className="filter">
          <h2>Filters</h2>
          <p onClick={() => handleClear()}>Clear</p>
        </div>

        <h2>Price</h2>
        <div className="range">
          <p>50</p>
          <p>150</p>
          <p>200</p>
        </div>
        <input
          type="range"
          id="filter-price"
          min="100"
          max="5000"
          onChange={(e) => dispatch({ type: "RANGE", payload: e.target.value })}
        />

        <h2>Category</h2>
        {categories.map((el, id) => {
          return (
            <div key={id} className="filter-category">
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
            <div className="filter-rating">
              <input
                type="radio"
                key={idx}
                name="rating"
                id="filter-rating"
                onClick={() => dispatch({ type: "STARS", payload: el })}
              />
              <label for="#filter-rating">{el} star</label>
            </div>
          );
        })}

        <h2>Sort by</h2>
        <div className="filter-sort">
          <input
            type="radio"
            name="sort"
            id="filter-sort"
            onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          />
          <label for="#filter-sort">Price-Low to High</label>
        </div>
        <div className="filter-sort">
          <input
            type="radio"
            name="sort"
            id="filter-sort"
            onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          />
          <label for="#filter-sort">Price-High to Low</label>
        </div>
      </div>
    )
  );
};
