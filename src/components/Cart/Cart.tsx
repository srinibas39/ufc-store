import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { allProductType } from "../../context/ProductContext/ProductContext.types";
import { handleToast } from "../../utils/ToastUtils";
import { PriceDetail } from "../PriceDetails/PriceDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = () => {
  const { prodState, removeCart, inDecCart, addWishlist, getCart } =
    useProduct();
  const { token } = useAuth();
  const { mode } = useMode();
  const [cartData, setCartData] = useState([] as allProductType[]);

  const discountPrice = (price: string, discount: string) => {
    const newD = Number(discount.split("%")[0]);
    const nPrice = Number(price) * (newD / 100);
    return Number(nPrice) + Number(price);
  };

  const calculateTotalPrice = () => {
    let tp = 0;
    let deliveryCharges = 500;
    prodState.cartItems.forEach((el) => {
      tp += Number(el.price) * el.qty;
    });
    tp += deliveryCharges;
    return Math.round(tp);
  };

  const totalDiscountPrice = () => {
    let dprice = 0;

    prodState.cartItems.forEach((el) => {
      dprice += discountPrice(el.price, el.discount) * el.qty;
    });
    return Math.round(dprice);
  };

  const discount = () => {
    let discount = totalDiscountPrice() - calculateTotalPrice() + 500; //delivery charges=500
    return Math.round(discount);
  };

  const totalQty = () => {
    let qty = 0;
    prodState.cartItems.forEach((el) => {
      qty += el.qty;
    });
    return qty;
  };

  useEffect(() => {
    (async () => {
      const cartData = await getCart(token);
      // @ts-ignore
      setCartData(cartData);
    })();
  }, [prodState.cartItems]);

  // save for later

  const saveForLaterHandler = (el: any) => {
    handleToast("saving your item for later");
    setTimeout(() => {
      addWishlist(token, el);
      removeCart(token, el._id);
    }, 1500);
  };

  // inc/dec item in the cart

  const inDecCartHandler = (el: any, type: string) => {
    if (type === "increment") {
      handleToast("icrementing the item in the cart");
      setTimeout(() => inDecCart(token, el._id, "increment"), 1500);
    } else {
      handleToast("decrementing the item in the cart");
      setTimeout(() => inDecCart(token, el._id, "decrement"), 1500);
    }
  };

  // remove item from the cart

  const removeItemFromCart = (el:any) => {
    handleToast("Removing the item from the cart");
    setTimeout(() => removeCart(token, el._id), 1500);
  };

  return (
    <>
      <h1
        className="cart-header"
        style={{ margin: "1rem", padding: "1rem" }}
        id={mode ? `dark` : ""}
      >
        My Cart({cartData.length})
      </h1>

      <div
        className="cart-box"
        id={mode ? `dark` : ""}
        style={{ padding: "1rem" }}
      >
        {cartData.length > 0 ? (
          <div className="carts-container">
            {cartData.map((el) => {
              return (
                <div key={el._id} className="cartItem-container">
                  <div className="cartItem-img">
                    <img src={el.image} alt="loading..." />
                  </div>
                  <div className="cartItem-list">
                    <div className="cartItem-content">
                      <p>{el.title}</p>
                      <div className="item-price">
                        <h2>&#8377; {el.price}</h2>
                        <h3>
                          <del>
                            &#8377; {discountPrice(el.price, el.discount)}
                          </del>
                        </h3>
                      </div>
                      <h4>{el.discount}</h4>
                      <div className="qty">
                        <p>Quantity :</p>

                        <span
                          className="material-icons"
                          onClick={() => inDecCartHandler(el, "decrement")}
                        >
                          {" "}
                          remove_circle_outline{" "}
                        </span>
                        <div className="qty-value">{el.qty}</div>
                        <span
                          className="material-icons"
                          onClick={() => inDecCartHandler(el, "increment")}
                        >
                          {" "}
                          add_circle_outline{" "}
                        </span>
                      </div>
                    </div>
                    <div className="cartItem-buttons">
                      <button
                        className="background"
                        onClick={() => saveForLaterHandler(el)}
                      >
                        SAVE FOR LATER
                      </button>
                      <button onClick={() => removeItemFromCart(el)}>
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <img
            style={{ height: "100%", width: "100%" }}
            src={require("../../images/empty-cart.png")}
          />
        )}
        {cartData.length > 0 && (
          <PriceDetail
            totalQty={totalQty}
            totalDiscountPrice={totalDiscountPrice}
            discount={discount}
            calculateTotalPrice={calculateTotalPrice}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
};
