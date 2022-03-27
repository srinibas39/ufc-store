import { useReducer , useEffect } from "react";



export const Filter = ({ allProducts }) => {
  // const [state,dispatch]=useReducer(reducerFn,{
  //   sort:null,

  // })
  const categories=allProducts.reduce((a, c) => (a.includes(c.categoryName) ? [...a] : [...a, c.categoryName]),[]);
  // console.log(categories);
  
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
       {
         categories.map((el,idx)=>{
           return <div key={idx} class="filter-category">
           <input type="checkbox" name="category" id="filter-category" />
           <label for="#filter-category">{el}</label>
         </div>
         })
       }
      <h2>Rating</h2>
      <div class="filter-rating">
        <input type="radio" name="rating" id="filter-rating" />
        <label for="#filter-rating">{"5 stars"}</label>
      </div>
      <div class="filter-rating">
        <input type="radio" name="rating" id="filter-rating" />
        <label for="#filter-rating">{"4 stars"}</label>
      </div>
      <div class="filter-rating">
        <input type="radio" name="rating" id="filter-rating" />
        <label for="#filter-rating">{"3 stars"}</label>
      </div>
      <div class="filter-rating">
        <input type="radio" name="rating" id="filter-rating" />
        <label for="#filter-rating">{"2 stars"}</label>
      </div>
      <div class="filter-rating">
        <input type="radio" name="rating" id="filter-rating" />
        <label for="#filter-rating">{"1 stars"}</label>
      </div>

      <h2>Sort by</h2>
      <div class="filter-sort">
        <input type="radio" name="sort" id="filter-sort" />
        <label for="#filter-sort">Price-Low to High</label>
      </div>
      <div class="filter-sort">
        <input type="radio" name="sort" id="filter-sort" />
        <label for="#filter-sort">Price-High to Low</label>
      </div>
    </div>
  );
};
