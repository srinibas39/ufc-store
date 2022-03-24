import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

export const AddToCartButton = ({ countCartItems, setCountCartItems }) => {
    
    const [cartItems, setCartItems] = useState(0);
     
    const handleClick=()=>{
        setCartItems((cartItems) => cartItems + 1)
        setCountCartItems(countCartItems+1)
    }
    
  console.log(countCartItems);

  return (
    <>
      {cartItems > 0 ? (
        <button>
          <a class="link black">Go To Cart</a>
        </button>
      ) : (
        <button onClick={() => handleClick()}>
          <a class="link black">Add to Cart</a>
        </button>
      )}
    </>
  );
};
