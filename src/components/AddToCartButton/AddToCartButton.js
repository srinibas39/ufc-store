import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";


import { useProduct } from "../../context/ProductContext/ProductContext";


export const AddToCartButton = ({ el }) => {
    
    const { prodState, addCart } = useProduct();
    const { token } = useAuth();
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const item = prodState.cartItems.find((ele) => el._id === ele._id);
        setCartItem(item);
    }, [prodState.cartItems])

    return <>
        {
            cartItem ? <button onClick={() => token ? navigate("/cart") : navigate("/profile")}>GO TO CART</button> :
                <button onClick={() => token ? addCart(token, el) : navigate("/profile")}> ADD TO CART</button>
        }
    </>
}