import { useState } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/FilterContext/FilterContext";


export const AddToCartButton = ({el}) => {
    const [buttonClicked,setButtonClicked]=useState(false);
   const {dispatch}=useFilter()
    return<>
       {
           
           buttonClicked ? <button><Link className="link black" to="/cart">GO TO CART</Link></button> :
           <button onClick={() =>(dispatch({ type: "ADD_TO_CART", payload: el }),setButtonClicked(true))}>
           <a class="link black">ADD TO CART</a>
       </button>
       }
    </>
}