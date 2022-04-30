import { useEffect } from "react/cjs/react.production.min";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useProduct } from "../../context/ProductContext/ProductContext";

export const Cart = () => {
  const { prodState, removeCart, inDecCart, addWishlist } = useProduct();
  const { token } = useAuth();

  const discountPrice = (price, discount) => {
    const newD = discount.split("%")[0];
    const nPrice = price * (newD / 100);
    return Number(nPrice) + Number(price);
  };
  const calculateTotalPrice = () => {
    let tp = 0;
    let deliveryCharges = 500;
    prodState.cartItems.forEach((el) => {
      tp += Number(el.price) * el.qty;
    });
    tp += deliveryCharges;
    return tp;
  };

  const totalDiscountPrice = () => {
    let dprice = 0;

    prodState.cartItems.forEach((el) => {
      dprice += discountPrice(el.price, el.discount) * el.qty;
    });
    return dprice;
  };

  const discount = () => {
    let discount = totalDiscountPrice() - calculateTotalPrice() + 500; //delivery charges=500
    return discount;
  };

  const totalQty = () => {
    let qty = 0;
    prodState.cartItems.forEach((el) => {
      qty += el.qty;
    });
    return qty;
  };

  return (
    <>
      <h1 className="cart-header">My Cart({prodState.cartItems.length})</h1>

      <div className="cart-box">
        {prodState.cartItems.length > 0 ? (
          <div className="carts-container">
            {prodState.cartItems.map((el) => {
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
        {prodState.cartItems.length > 0 && (
          <div className="priceDetail-container">
            <h2>PRICE DETAILS</h2>
            <hr />
            <div className="priceDetail-price">
              <p>Price({totalQty()})</p>
              <p>&#8377;{totalDiscountPrice()}</p>
            </div>
            <div className="priceDetail-discount">
              <p>Discount</p>
              <p>- &#8377;{discount()}</p>
            </div>
            <div className="priceDetail-DC">
              <p>Delivery Charges</p>
              <p>+ &#8377;500</p>
            </div>
            <hr />
            <div className="priceDetail-total">
              <h2>TOTAL AMOUNT</h2>
              <h2>&#8377;{calculateTotalPrice()}</h2>
            </div>
            <hr />
            <p>You will save &#8377;1999 on this order</p>
            <button className="background">PLACE ORDER</button>
          </div>
        )}
      </div>
    </>
  );
};
