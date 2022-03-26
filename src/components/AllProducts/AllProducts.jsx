import axios from "axios";
import { useState } from "react";

export const AllProducts = ({ allProducts }) => {
  const discountPrice = (price, discount) => {
    const newD = discount.split("%")[0];
    const nPrice = price * (newD / 100);
    return Number(nPrice) + Number(price);
  };
  const [countCartItems, setCountCartItems] = useState(0);
  console.log(countCartItems);
  

  return (
    <div class="all-products">
      <h1>
        Showing all products
        <small class="lighter">
          (showing {allProducts && allProducts.length} products)
        </small>
      </h1>
      <div class="all-products-div">
        {allProducts &&
          allProducts.map((el) => {
            return (
              <div key={el._id} class="item-container">
                <div class="item-img">
                  <img src={el.image} alt="loading" />
                  <div class="product-like pink">
                    <span class="material-icons"> favorite </span>
                  </div>
                </div>
                <div class="item-list">
                  <p>{el.title}</p>
                  <div class="price">
                    <h2>&#8377; {el.price}</h2>
                    <h3>
                      <del>&#8377; {discountPrice(el.price, el.discount)}</del>
                    </h3>
                  </div>
                  <h4>{el.discount}</h4>
                  <div class="item-buttons">
                    <button class="background">
                      <a class="link" href="../pages/preview.html">
                        Preview
                      </a>
                    </button>
                    <button>
                      <a class="link black">Add to Cart</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
