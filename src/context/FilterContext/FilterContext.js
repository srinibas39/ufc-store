import { createContext, useContext, useReducer } from "react";


export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

   const reducerFn = (state, action) => {
      switch (action.type) {
         case "SORT":
            return { ...state, sort: action.payload };
         case "STARS":
            return { ...state, stars: action.payload };
         case "CATEGORY":
            return {
               ...state,
               filterCategory: state.filterCategory.includes(action.payload)
                  ? state.filterCategory.filter((el) => el !== action.payload)
                  : [...state.filterCategory, action.payload],
            };
         case "RANGE":
            return { ...state, range: action.payload }
         case "CLEAR":
            return { ...state, sort: null, filterCategory: [], stars: null, range: null }
         case "ADD_TO_CART":
            return {
               ...state, cart: [...state.cart, { ...action.payload, qty: action.payload.qty + 1 }]
            }
         case "INC_QTY":
            // {...state.cart.find((el)=>el._id===action.payload._id),qty:action.payload.qty+1}
            return {...state,cart:state.cart.map((el)=>el._id===action.payload._id?{...el,qty:el.qty+1}:el)}
         case "DEC_QTY":
            return {...state,cart:state.cart.map((el)=>el._id===action.payload._id && el.qty>1 ?{...el,qty:el.qty-1}:el)}   
         case "REMOVE_FROM_CART":
             return {...state,cart:state.cart.filter((el)=>el._id!==action.payload._id)}
         case "ADD_TO_WISHLIST":
            return {...state,wishList:[...state.wishList,action.payload]}  
         case "REMOVE_FROM_WISHLIST":
            return {...state,wishList:state.wishList.filter((el)=>el._id!==action.payload._id)}  
         
         default:
            return { ...state }
      }
   };

   const [state, dispatch] = useReducer(reducerFn, {
      sort: null,
      filterCategory: [],
      stars: null,
      range: null,
      cart: [],
      wishList:[],
      
   });
   return (<FilterContext.Provider value={{ state, dispatch }}>
      {children}
   </FilterContext.Provider>)
}


export const useFilter = () => useContext(FilterContext)