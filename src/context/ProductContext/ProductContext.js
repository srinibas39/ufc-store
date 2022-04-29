import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { AddCart } from "../../services/AddCart";
import { AddWishlist } from "../../services/AddWishlist";
import { GetAllProducts } from "../../services/GetAllProducts";
import { GetCart } from "../../services/GetCart";
import { GetWishList } from "../../services/GetWishlist";
import { RemoveCart } from "../../services/RemoveCart";
import { RemoveWishlist } from "../../services/RemoveWishlist";
import { useAuth } from "../AuthContext/AuthContext";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const { token } = useAuth();
    const [toastLoading, setToastLoading] = useState(false);
    const [toastText, setToastText] = useState("");
    const productReducer = (state, action) => {
        switch (action.type) {
            case "GET_PRODUCTS":
                return { ...state, allProducts: [...action.payload] }
            case "ADD_REMOVE_WISHLIST":
                return { ...state, wishlistItems: [...action.payload] }
            case "ADD_REMOVE_CART":
                return { ...state, cartItems: [...action.payload] }
            default:
                return { ...state }
        }
    }
    const [prodState, prodDispatch] = useReducer(productReducer, {
        allProducts: [],
        wishlistItems: [],
        cartItems: []
    })
    const getProduct = (productId) => prodState.allProducts.find((el) => el._id === productId) || {};

    useEffect(() => {

        (async () => {
            try {
                const resProd = await GetAllProducts();
                if (resProd.status === 200 || resProd.status === 201) {

                    prodDispatch({ type: "GET_PRODUCTS", payload: resProd.data.products })
                }



            }
            catch (error) {
                console.log(error);
            }


        })()

    }, [])
    const addWishlist = async (token, product) => {

        try {
            setToastLoading(true);
            setToastText("Item is getting added to wishlist")
            const res = await AddWishlist({ token, product });
            if (res.status === 200 || res.status === 201) {
                prodDispatch({ type: "ADD_REMOVE_WISHLIST", payload: res.data.wishlist })
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    const removeWishlist = async (token, id) => {
        try {
            setToastLoading(true);
            setToastText("Item is getting removed from wishlist")
            const res = await RemoveWishlist({ token, id });
            if (res.status === 200 || res.status === 201) {
                prodDispatch({ type: "ADD_REMOVE_WISHLIST", payload: res.data.wishlist })
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    const getWishlist = async (token) => {
        try {

            const resWishlist = await GetWishList({ token });
            if (resWishlist.status === 200 || resWishlist.status === 201) {
                return resWishlist.data.wishlist;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const addCart = async (token, product) => {
        try {
            setToastLoading(true);
            setToastText("Item is getting added in the cart")
            const res = await AddCart(token, product);
            if (res.status === 200 || res.status === 201) {
                prodDispatch({ type: "ADD_REMOVE_CART", payload: res.data.cart })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const removeCart = async(token, id) => {
        try {
            setToastLoading(true);
            setToastText("Item is getting removed from cart")
            const res = await RemoveCart({ token, id })
            if (res.status === 200 || res.status === 201) {
                prodDispatch({ type: "ADD_REMOVE_CART", payload: res.data.cart })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const getCart = async(token) => {
        try {
            const res = await GetCart({ token });
            if (res.status === 200 || res.status === 201) {
                return res.data.cart
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    return <ProductContext.Provider value={{ prodState, getProduct, addWishlist, removeWishlist, toastLoading, setToastLoading, toastText, getWishlist, addCart, getCart, removeCart }}>
        {children}
    </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext)