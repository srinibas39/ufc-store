import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

import { useFilter } from "../../context/FilterContext/FilterContext";


export const AddToCartButton = ({el}) => {
    const {state,dispatch}=useFilter()
    const item=state.cart.find((ele)=>el._id===ele._id)
   
    return<>
       {
            item && item.qty>0? <button><Link className="link black" to="/cart">GO TO CART</Link></button> :
           <button onClick={() =>(dispatch({ type: "ADD_TO_CART", payload: el }))}>
           <a class="link black">ADD TO CART</a>
       </button>
       }
    </>
}