import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { AddToWishList } from "../AddToWishList/AddToWishList";

export const WishList = () => {
  const { token } = useAuth();
  const { getWishlist, removeWishlist, addCart, prodState } = useProduct();
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    (async () => {
      const wishlistData = await getWishlist(token);
      setWishlistData(wishlistData);
    })();
  }, [prodState.wishlistItems]);

  return (
    <>
      <h1 className="wishList-header">My Wishlist({wishlistData.length})</h1>
      <div className="wishList">
        {wishlistData.length > 0 ? (
          wishlistData.map((el) => {
            return (
              <div key={el._id} className="product-container">
                <div className="product-img">
                  <img src={el.image} alt="loading..." />
                  <AddToWishList el={el}/>
                </div>
                <div className="product-list">
                  <p>{el.title}</p>
                  <h2>&#8377; {el.price}</h2>
                  <button
                    className="background"
                    onClick={() => (
                      addCart(token, el), removeWishlist(token, el._id)
                    )}
                  >
                    Move to cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <img
            style={{ height: "80%", width: "50%" }}
            src={require("../../images/empty-wishlist.png")}
          />
        )}
      </div>
    </>
  );
};
