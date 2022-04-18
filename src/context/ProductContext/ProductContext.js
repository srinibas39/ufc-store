import { createContext, useContext } from "react";
import { useReducer, useEffect } from "react";
import { GetWishlist } from "../../services/GetWishlist";
import { useAuth } from "../AuthContext/AuthContext";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const {token} = useAuth();
    console.log(token);
    // const productReducer = (state, action) => {
    //     switch (action.type) {
    //         default:
    //             return { ...state }
    //     }
    // }

    // const [productState, productDispatch] = useReducer(productReducer, {
    //     wishlist: []
    // });

    useEffect(() => {
        (async () => {
            try {

                if (token) {

                    const res = await GetWishlist({ encodedToken: token });
                    if (res === 200 || res === 201) {
                        console.log(res);
                    }

                }
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, [token])

    return <ProductContext.Provider value={{}}>
        {children}
    </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext)