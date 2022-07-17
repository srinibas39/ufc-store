import { useEffect, useState, useRef } from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { FilterProps } from "./Filter.types";

export const Filter = ({ allProducts }: FilterProps) => {
  const [categories, setCategories] = useState([]);
  const stars = ["5", "4", "3", "2", "1"];
  const [clear, setClear] = useState(false);

  const { state } = useFilter();
  const { prodState } = useProduct();
  const { mode } = useMode();
  const categoryRef = useRef([]);
  const sortLowRef = useRef<HTMLInputElement>(null!);
  const sortHighRef = useRef<HTMLInputElement>(null!);
  const ratingRef = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      const allCategory = categoryRef.current;
      const lowSort = sortLowRef.current;
      const highSort = sortHighRef.current;
      const ratingSort = ratingRef.current;

      // category
      for (let i = 0; i < allCategory.length; i++) {
        if (
          // @ts-ignore
          prodState.category.includes(allCategory[i].el) ||
          // @ts-ignore
          state.filterCategory.includes(allCategory[i].el)
        ) {
          // @ts-ignore
          allCategory[i].ele.click();
        }
      }
      //sort
      if (state.sort === "LOW_TO_HIGH") {
        lowSort.click();
      } else if (state.sort === "HIGH_TO_LOW") {
        highSort.click();
      }
      // rating
      for (let i = 0; i < ratingSort.length; i++) {
        // @ts-ignore
        if (state.stars === ratingSort[i].el) {
          // @ts-ignore
          ratingSort[i].ele.click();
        }
      }
    }, 500);
  }, []);

  useEffect(() => {
    const catName = allProducts.reduce(
      // @ts-ignore
      (a, c) => (a.includes(c.categoryName) ? [...a] : [...a, c.categoryName]),
      []
    );
    // @ts-ignore
    setCategories(catName);
    setClear(true);
  }, [allProducts, clear]);

  const { dispatch } = useFilter();

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
    setClear(false);
  };

  

  return (
    clear && (
      <div className="filter-container"  id={mode?`dark`:""}>
        <div className="filter">
          <h2>Filters</h2>
          <p onClick={() => handleClear()}>Clear</p>
        </div>

        <h2>Price</h2>
        <div className="range">
          <p>&#8377; 100</p>
          <p>&#8377; 2500</p>
          <p>&#8377; 5000</p>
        </div>
        <input
          type="range"
          id="filter-price"
          min="100"
          max="5000"
          value={state.range !== null ? state.range : 5000}
          onChange={(e) => dispatch({ type: "RANGE", payload: e.target.value })}
        />
        <div
          style={{ marginLeft: "auto", border: "1px solid", padding: "2px" }}
        >
          &#8377; {state.range ? state.range : 5000}
        </div>

        <h2>Category</h2>
        {categories.map((el, id) => {
          return (
            <div key={id} className="filter-category">
              <input
                type="checkbox"
                name="category"
                id="filter-category"
                // @ts-ignore
                ref={(ele) => (categoryRef.current[id] = { el, ele })}
                onChange={() => dispatch({ type: "CATEGORY", payload: el })}
              />
              <label htmlFor="#filter-category">{el}</label>
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
                // @ts-ignore
                ref={(ele) => (ratingRef.current[idx] = { el, ele })}
              />
              <label htmlFor="#filter-rating">{el} star</label>
            </div>
          );
        })}

        <h2>Sort by</h2>
        <div className="filter-sort">
          <input
            type="radio"
            name="sort"
            id="filter-sort-low"
            onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
            ref={sortLowRef}
          />
          <label htmlFor="#filter-sort">Price-Low to High</label>
        </div>
        <div className="filter-sort">
          <input
            type="radio"
            name="sort"
            id="filter-sort-high"
            onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
            ref={sortHighRef}
          />
          <label htmlFor="#filter-sort">Price-High to Low</label>
        </div>
      </div>
    )
  );
};
