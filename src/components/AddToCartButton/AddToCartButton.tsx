import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { allProductType } from "../../context/ProductContext/ProductContext.types";
import { AddToCartButtonProps } from "./AddToCartButton.types";
import { handleToast } from "../../utils/ToastUtils";

export const AddToCartButton = ({ el }: AddToCartButtonProps) => {
  const { prodState, addCart } = useProduct();
  const { token } = useAuth();
  const [cartItem, setCartItem] = useState<allProductType | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    const item = prodState.cartItems.find((ele) => el._id === ele._id);
    setCartItem(item);
  }, [prodState.cartItems]);

 

  // handleCart
  const handleCart=()=>{
    if(token){
      handleToast("adding your item in the cart")
      setTimeout(()=>addCart(token, el) ,1500)
    }
    else{
      navigate("/profile")
    }
  }

  return (
    <>
      {cartItem ? (
        <button
          onClick={() => (token ? navigate("/cart") : navigate("/profile"))}
        >
          GO TO CART
        </button>
      ) : (
        <button
          onClick={handleCart}
        >
          {" "}
          ADD TO CART
        </button>
      )}
      
    </>
  );
};
