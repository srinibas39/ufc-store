import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { allProductType } from "../../context/ProductContext/ProductContext.types";
import { AddToWishList } from "../AddToWishList/AddToWishList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleToast } from "../../utils/ToastUtils";

export const WishList = () => {
  const { token } = useAuth();
  const { getWishlist, removeWishlist, addCart, prodState } = useProduct();
  const [wishlistData, setWishlistData] = useState([] as allProductType[]);

  const { mode } = useMode();

  useEffect(() => {
    (async () => {
      const wishlistData = await getWishlist(token);
      setWishlistData(wishlistData);
    })();
  }, [prodState.wishlistItems]);

  // move to cart

  const handleMoveToCart=(el:any)=>{
    handleToast("Moving this item to cart")
    setTimeout(()=>{
      addCart(token, el) 
      removeWishlist(token, el._id)
    },1500)
  }

  return (
    <>
      <h1 className="wishList-header" id={mode?`dark`:""}>My Wishlist({wishlistData.length})</h1>
      <div className="wishList" id={mode?`dark`:""}>
        {wishlistData.length > 0 ? (
          wishlistData.map((el: allProductType) => {
            return (
              <div key={el._id} className="product-container">
                <div className="product-img">
                  <img src={el.image} alt="loading..." />
                  <AddToWishList el={el} />
                </div>
                <div className="product-list">
                  <p>{el.title}</p>
                  <h2>&#8377; {el.price}</h2>
                  <button
                    className="background"
                    onClick={() => handleMoveToCart(el)}
                  >
                    Move to cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <img
            style={{ height: "100%", width: "100%" }}
            src={require("../../images/empty-wishlist.png")}
          />
        )}
      </div>
      <ToastContainer/>
    </>
  );
};
