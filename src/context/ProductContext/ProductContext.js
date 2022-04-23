import { createContext, useContext, useState, useEffect, useReducer } from "react";

import { GetAllProducts } from "../../services/GetAllProducts";
import { GetWishList } from "../../services/GetWishlist";
import { useAuth } from "../AuthContext/AuthContext";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const { token } = useAuth();
    const productReducer = (state, action) => {
        switch (action.type) {
            case "GET_PRODUCTS":
                return { ...state, allProducts: [...action.payload] }
            case "GET_WISHLIST":
                return { ...state, wishlist: [...action.payload] }
            default:
                return { ...state }
        }
    }
    const [prodState, prodDispatch] = useReducer(productReducer, {
        allProducts: [],
        wishlist: []
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

    return <ProductContext.Provider value={{ prodState, getProduct }}>
        {children}
    </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext)