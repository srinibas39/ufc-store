export const Cart = () => {
  return (
    <>
      <h1 class="cart-header">My Cart(2)</h1>
      <div class="cart-box">
        <div class="cartItem-container">
          <div class="cartItem-img">
            <img src={require("../../images/product-img1.jpg")} alt="loading..." />
          </div>
          <div class="cartItem-list">
            <div class="cartItem-content">
              <p>UFC VENUM Authentic Fight Night Men's Walkout Jersey</p>
              <div class="item-price">
                <h2>&#8377; 2000</h2>
                <h3>
                  <del>&#8377; 3000</del>
                </h3>
              </div>
              <h4>50% off</h4>
              <div class="qty">
                <p>Quantity :</p>

                <span class="material-icons"> remove_circle_outline </span>
                <div class="qty-value">1</div>
                <span class="material-icons"> add_circle_outline </span>
              </div>
            </div>
            <div class="cartItem-buttons">
              <button class="background">SAVE FOR LATER</button>
              <button>REMOVE</button>
            </div>
          </div>
        </div>
        <div class="cartItem-container">
          <div class="cartItem-img">
            <img src="../images/product-img1.jpg" alt="loading..." />
          </div>
          <div class="cartItem-list">
            <div class="cartItem-content">
              <p>UFC VENUM Authentic Fight Night Men's Walkout Jersey</p>
              <div class="item-price">
                <h2>&#8377; 2000</h2>
                <h3>
                  <del>&#8377; 3000</del>
                </h3>
              </div>
              <h4>50% off</h4>
              <div class="qty">
                <p>Quantity :</p>

                <span class="material-icons"> remove_circle_outline </span>
                <div class="qty-value">1</div>
                <span class="material-icons"> add_circle_outline </span>
              </div>
            </div>
            <div class="cartItem-buttons">
              <button class="background">SAVE FOR LATER</button>
              <button>REMOVE</button>
            </div>
          </div>
        </div>
        <div class="priceDetail-container">
          <h2>PRICE DETAILS</h2>
          <hr />
          <div class="priceDetail-price">
            <p>Price(2 items)</p>
            <p>&#8377;4999</p>
          </div>
          <div class="priceDetail-discount">
            <p>Discount</p>
            <p>&#8377;1999</p>
          </div>
          <div class="priceDetail-DC">
            <p>Delivery Charges</p>
            <p>&#8377;499</p>
          </div>
          <hr />
          <div class="priceDetail-total">
            <h2>TOTAL AMOUNT</h2>
            <h2>&#8377;3499</h2>
          </div>
          <hr />
          <p>You will save &#8377;1999 on this order</p>
          <button class="background">PLACE ORDER</button>
        </div>
      </div>
    </>
  );
};
