import axios from "axios";
import { useState } from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AddToWishList } from "../AddToWishList/AddToWishList";

export const AllProducts = ({ allProducts }) => {
  const discountPrice = (price, discount) => {
    const newD = discount.split("%")[0];
    const nPrice = price * (newD / 100);
    return Number(nPrice) + Number(price);
  };
 
  
  const {state,dispatch}=useFilter()
  

  const getCategoryData=()=>{
    if(state.filterCategory.length!==0){
      const newProducts= allProducts.filter((el)=>{
            if(state.filterCategory.includes(el.categoryName)){
                 return el;
            }
       })
       return newProducts;
    }
    else {
      return allProducts;
    }
  }

  const categoryData=getCategoryData();
 
  const getSortedData=()=>{
    if(state.sort==="LOW_TO_HIGH"){
      return categoryData.sort((a,b)=>a.price-b.price)
    }
    if(state.sort==="HIGH_TO_LOW"){
      return categoryData.sort((a,b)=>b.price-a.price)
    }
    return categoryData;
  }
  const sortedData=getSortedData();

  const getStarData=()=>{
     if(state.stars!==null){
       return sortedData.filter((el)=>el.rating===state.stars)
     }
    return sortedData;
  }
  const starData=getStarData();

  const getRangeData=()=>{
    if(state.range!==null){
      return starData.filter((el)=>Number(el.price)<=Number(state.range))
    }
    return starData;
  }
  const rangeData=getRangeData();

  return (
    <div class="all-products">
      <h1>
        Showing all products
        <small class="lighter">
          (showing {rangeData && rangeData.length} products)
        </small>
      </h1>
      <div class="all-products-div">
        {rangeData &&
         rangeData.map((el) => {
            return (
              <div key={el._id} class="item-container">
                <div class="item-img">
                  <img src={el.image} alt="loading" />
                  <AddToWishList el={el}/>
                </div>
                <div class="item-list">
                  <p>{el.title}</p>
                  <div class="price">
                    <h2>&#8377; {el.price}</h2>
                    <h3>
                      <del>&#8377; {discountPrice(el.price, el.discount)}</del>
                    </h3>
                  </div>
                  <h4>{el.discount}</h4>
                  <div class="item-buttons">
                    <button class="background">
                      <a class="link" href="../pages/preview.html">
                        PREVIEW
                      </a>
                    </button>
              
                    <AddToCartButton el={el}/>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
