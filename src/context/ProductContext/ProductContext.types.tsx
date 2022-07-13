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