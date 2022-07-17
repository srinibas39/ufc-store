import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { allProductType } from "../../context/ProductContext/ProductContext.types";
import { AddToWishListProps } from "./AddToWishList.types";
import { handleToast } from "../../utils/ToastUtils";

export const AddToWishList = ({ el }: AddToWishListProps) => {
  const { removeWishlist, addWishlist, prodState } = useProduct();
  const { token } = useAuth();
  const [item, setItem] = useState<allProductType | undefined>();
  const navigate = useNavigate();
  const { mode } = useMode();

  useEffect(() => {
    const item = prodState.wishlistItems.find((ele) => el._id === ele._id);
    setItem(item);
  }, [prodState.wishlistItems]);

  // add Wishlist

  const handleWishlist = () => {
    handleToast("Adding item to wishlist");
    if (token) {
      setTimeout(() => addWishlist(token, el), 1500);
    } else {
      navigate("/login");
    }
  };

  // Remove Wishlist

  const handleRemoveWishlist = () => {
    handleToast("Removing item from wishlist");
    if (token) {
      setTimeout(() => removeWishlist(token, el._id), 1500);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {item ? (
        <div className="product-like pink" onClick={handleRemoveWishlist}>
          <span className="material-icons"> favorite </span>
        </div>
      ) : (
        <div
          id={mode ? `dark-color` : ""}
          className={`product-like`}
          onClick={handleWishlist}
        >
          <span className="material-icons"> favorite </span>
        </div>
      )}
    </>
  );
};
