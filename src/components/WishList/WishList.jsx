import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";

export const WishList = () => {
  
  const { token } = useAuth();
  const { getWishlist } = useProduct();
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    (async () => {
      const wishlistData = await getWishlist(token);
      setWishlistData(wishlistData);
    })();
  }, []);

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
                  <div className="product-like pink">
                    <span className="material-icons"> favorite </span>
                  </div>
                </div>
                <div className="product-list">
                  <p>{el.title}</p>
                  <h2>&#8377; {el.price}</h2>
                  <button className="background">
                    <a className="link" href="../pages/Cart.html">
                      Move to cart
                    </a>
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
