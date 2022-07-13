import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { allProductType } from "../../context/ProductContext/ProductContext.types";
import { PriceDetail } from "../PriceDetails/PriceDetail";

export const Cart = () => {
  const { prodState, removeCart, inDecCart, addWishlist, getCart } =
    useProduct();
  const { token } = useAuth();
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

  return (
    <>
      <h1 className="cart-header">My Cart({cartData.length})</h1>

      <div className="cart-box">
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
                          onClick={() => inDecCart(token, el._id, "decrement")}
                        >
                          {" "}
                          remove_circle_outline{" "}
                        </span>
                        <div className="qty-value">{el.qty}</div>
                        <span
                          className="material-icons"
                          onClick={() => inDecCart(token, el._id, "increment")}
                        >
                          {" "}
                          add_circle_outline{" "}
                        </span>
                      </div>
                    </div>
                    <div className="cartItem-buttons">
                      <button
                        className="background"
                        onClick={() => (
                          addWishlist(token, el), removeCart(token, el._id)
                        )}
                      >
                        SAVE FOR LATER
                      </button>
                      <button onClick={() => removeCart(token, el._id)}>
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
            style={{ height: "80%", width: "44%" }}
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
    </>
  );
};
