import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { AddCart } from "../../services/AddCart";
import { AddWishlist } from "../../services/AddWishlist";
import { GetAllProducts } from "../../services/GetAllProducts";
import { GetCart } from "../../services/GetCart";
import { GetWishList } from "../../services/GetWishlist";
import { InDecCart } from "../../services/InDecCart";
import { RemoveCart } from "../../services/RemoveCart";
import { RemoveWishlist } from "../../services/RemoveWishlist";
import { allProductType, productActionType, ProductProviderType, productStateType } from "./ProductContext.types";


  


export const ProductContext = createContext({});

export const ProductProvider = ({ children }:ProductProviderType) => {
  const [toastLoading, setToastLoading] = useState(false);
  const [toastText, setToastText] = useState("");
  const productReducer = (
    state: productStateType,
    action:productActionType
  ) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, allProducts: [...action.payload] };
      case "ADD_REMOVE_WISHLIST":
        return { ...state, wishlistItems: [...action.payload] };
      case "ADD_REMOVE_CART":
        return { ...state, cartItems: [...action.payload] };
      case "AUTO_SUGGEST":
        return { ...state, suggestion: action.payload };
      case "SEARCH_TEXT":
        return { ...state, selectedSuggestion: action.payload };
      case "COUPON_APPLIED":
        return { ...state, coupon: action.payload };
      case "CATEGORY":
        return { ...state, category: action.payload };
      default:
        return { ...state };
    }
  };
  const [prodState, prodDispatch] = useReducer(productReducer, {
    allProducts: [],
    wishlistItems: [],
    cartItems: [],
    coupons: ["CART@10", "CART@20", "CART@30"],
    suggestion: [],
    selectedSuggestion: "",
    coupon: 0,
    category: [],
  });
  const getProduct = (productId:string) =>
    prodState.allProducts.find((el) => el._id === productId) || {};

  useEffect(() => {
    (async () => {
      try {
        const resProd = await GetAllProducts();
        if (resProd.status === 200 || resProd.status === 201) {
          prodDispatch({
            type: "GET_PRODUCTS",
            payload: resProd.data.products,
          });
          const suggestions = resProd.data.products.map((el:allProductType) => el.title);
          prodDispatch({ type: "AUTO_SUGGEST", payload: suggestions });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const addWishlist = async (token:string, product:allProductType) => {
    try {
      setToastLoading(true);
      setToastText("Item is getting added to wishlist");
      const res = await AddWishlist({ token, product });
      if (res.status === 200 || res.status === 201) {
        prodDispatch({
          type: "ADD_REMOVE_WISHLIST",
          payload: res.data.wishlist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeWishlist = async (token:string, id:string) => {
    try {
      setToastLoading(true);
      setToastText("Item is getting removed from wishlist");
      const res = await RemoveWishlist({ token, id });
      if (res.status === 200 || res.status === 201) {
        prodDispatch({
          type: "ADD_REMOVE_WISHLIST",
          payload: res.data.wishlist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getWishlist = async (token:string) => {
    try {
      const resWishlist = await GetWishList({ token });
      if (resWishlist.status === 200 || resWishlist.status === 201) {
        return resWishlist.data.wishlist;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addCart = async (token:string, product:allProductType) => {
    try {
      setToastLoading(true);
      setToastText("Item is getting added in the cart");
      const res = await AddCart({ token, product });
      if (res.status === 200 || res.status === 201) {
        prodDispatch({ type: "ADD_REMOVE_CART", payload: res.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeCart = async (token:string, id:string) => {
    try {
      setToastLoading(true);
      setToastText("Item is getting removed from cart");
      const res = await RemoveCart({ token, id });
      if (res.status === 200 || res.status === 201) {
        prodDispatch({ type: "ADD_REMOVE_CART", payload: res.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCart = async (token:string) => {
    try {
      const res = await GetCart({ token });
      if (res.status === 200 || res.status === 201) {
        return res.data.cart;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const inDecCart = async (token:string, id:string, type:string) => {
    try {
      setToastLoading(true);
      if (type === "increment") {
        setToastText("Incrementing the item from the cart");
      } else if (type === "decrement") {
        setToastText("Decrementing the item from the cart ");
      }
      const res = await InDecCart({ token, id, type });
      if (res.status === 200 || res.status === 201) {
        prodDispatch({ type: "ADD_REMOVE_CART", payload: res.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        prodState,
        prodDispatch,
        getProduct,
        addWishlist,
        removeWishlist,
        toastLoading,
        setToastLoading,
        toastText,
        getWishlist,
        addCart,
        getCart,
        removeCart,
        inDecCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
