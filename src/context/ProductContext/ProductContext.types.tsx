export type ProductProviderType={
    children:React.ReactNode
}

export type allProductType = {
  _id: string;
  title: string;
  price: string;
  categoryName: string;
  rating: string;
  image: string;
  discount: string;
  stock: boolean;
  qty: number;
};

export type productStateType = {
  allProducts: allProductType[];
  wishlistItems: allProductType[];
  cartItems: allProductType[];
  coupons: string[];
  suggestion: string[];
  selectedSuggestion: string;
  coupon: number;
  category: string[];
};



export type addRemoveActionType = {
  type: "GET_PRODUCTS" | "ADD_REMOVE_WISHLIST" | "ADD_REMOVE_CART";
  payload: allProductType[];
};

export type addRemoveStringArrayActionType = {
  type: "CATEGORY" | "AUTO_SUGGEST";
  payload: string[];
};

export type addRemoveStringActionType = {
  type: "SEARCH_TEXT";
  payload: string;
};

export type addRemoveNumberActionType = {
  type: "COUPON_APPLIED";
  payload: number;
};

export type productActionType =| addRemoveActionType
| addRemoveStringArrayActionType
| addRemoveStringActionType
| addRemoveNumberActionType

export type ProductContextValueType={
    prodState:productStateType
    prodDispatch:React.Dispatch<productActionType>
    getProduct:(productId:string)=>void
    addWishlist:(token:string, product:allProductType) =>void
    removeWishlist:(token:string, id:string)=>void
    toastLoading:boolean
    setToastLoading:React.Dispatch<React.SetStateAction<boolean>>
    toastText:string
    getWishlist:(token:string) =>void
    addCart:(token:string, product:allProductType)=>void
    getCart:(token:string) =>void
    removeCart:(token:string, id:string) =>void
    inDecCart:(token:string, id:string, type:string) => void
  }