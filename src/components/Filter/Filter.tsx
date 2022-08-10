import { useEffect, useState } from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { useMode } from "../../context/ModeContext/ModeContext";
import { FilterProps } from "./Filter.types";
import "./Filter.css";
import { useProduct } from "../../context/ProductContext/ProductContext";

export const Filter = ({ allProducts,setFilterOpen }: FilterProps) => {
  const [categories, setCategories] = useState([]);
  const { prodState, prodDispatch, setCurrPage } = useProduct();

  const stars = [
    "1 Star & Above",
    "2 Star & Above",
    "3 Star & Above",
    "4 Star & Above",
  ];
  const [clear, setClear] = useState(false);

  const { state, dispatch } = useFilter();
  const { mode } = useMode();

  useEffect(() => {
    if (prodState.category.length) {
      handleClear();
      for (let i = 0; i < prodState.category.length; i++) {
        dispatch({ type: "CATEGORY", payload: prodState.category[i] });
      }
      prodDispatch({ type: "CATEGORY", payload: [] });
    }
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

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
    setClear(false);
  };

  return (
    clear && (
      <div className="filter-container" id={mode ? `dark` : ""}>
        <div className="filter">
          <h2>Filters</h2>
          <span className="material-symbols-outlined" onClick={()=>setFilterOpen(false)} style={{cursor:"pointer"}}>
            keyboard_double_arrow_down
          </span>
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
            <div
              key={id}
              className="filter-category"
              onClick={() => (
                setCurrPage(1), dispatch({ type: "CATEGORY", payload: el })
              )}
            >
              <input
                type="checkbox"
                name="category"
                id="filter-category"
                checked={state.filterCategory.includes(el)}
              />
              <label htmlFor="#filter-category">{el}</label>
            </div>
          );
        })}
        <h2>Rating</h2>
        {stars.map((el, idx) => {
          return (
            <div
              className="filter-rating"
              onClick={() => dispatch({ type: "STARS", payload: el })}
            >
              <input
                type="radio"
                key={idx}
                name="rating"
                id="filter-rating"
                checked={state.stars === el}
              />
              <label htmlFor="#filter-rating">{el}</label>
            </div>
          );
        })}

        <h2>Sort by</h2>
        <div
          className="filter-sort"
          onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
        >
          <input
            type="radio"
            name="sort"
            id="filter-sort-low"
            checked={state.sort === "LOW_TO_HIGH"}
          />
          <label htmlFor="#filter-sort">Price-Low to High</label>
        </div>
        <div
          className="filter-sort"
          onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
        >
          <input
            type="radio"
            name="sort"
            id="filter-sort-high"
            checked={state.sort === "HIGH_TO_LOW"}
          />
          <label htmlFor="#filter-sort">Price-High to Low</label>
        </div>
      </div>
    )
  );
};
