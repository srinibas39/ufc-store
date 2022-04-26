import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { AddWishlist } from "../../services/AddWishlist";

import { GetAllProducts } from "../../services/GetAllProducts";
import { GetWishList } from "../../services/GetWishlist";
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
            case "GET_WISHLIST":
                return { ...state, wishlist: [...action.payload] }
            case "ADD_REMOVE_WISHLIST":
                return { ...state, wishlistItems: [...action.payload] }
            default:
                return { ...state }
        }
    }
    const [prodState, prodDispatch] = useReducer(productReducer, {
        allProducts: [],
        wishlist: [],
        wishlistItems: []
    })
    const getProduct = (productId) => prodState.allProducts.find((el) => el._id === productId) || {};

    useEffect(() => {

        (async () => {
            try {
                const resProd = await GetAllProducts();
                if (resProd.status === 200 || resProd.status === 201) {

                    prodDispatch({ type: "GET_PRODUCTS", payload: resProd.data.products })
                }

                const resWishlist = await GetWishList({ token });
                if (resWishlist.status === 200 || resWishlist.status === 201) {
                    prodDispatch({ type: "GET_WISHLIST", payload: resWishlist.data.wishlist })
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
            const res = await AddWishlist({ token, product });
            if (res.status === 200 || res.status === 201) {
                setToastText("Item is getting added to wishlist")
                prodDispatch({ type: "ADD_REMOVE_WISHLIST", payload: res.data.wishlist })
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    const removeWishlist = async (token, id) => {
        try {
            const res = await RemoveWishlist({ token, id });
            if (res.status === 200 || res.status === 201) {
                prodDispatch({ type: "ADD_REMOVE_WISHLIST", payload: res.data.wishlist })
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    return <ProductContext.Provider value={{ prodState, getProduct, addWishlist, removeWishlist, toastLoading, setToastLoading, toastText }}>
        {children}
    </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext)