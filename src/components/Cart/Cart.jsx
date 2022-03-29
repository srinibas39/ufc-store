import { useFilter } from "../../context/FilterContext/FilterContext";

export const Cart = () => {
  const {state,dispatch}=useFilter();;
  const discountPrice = (price, discount) => {
    const newD = discount.split("%")[0];
    const nPrice = price * (newD / 100);
    return Number(nPrice) + Number(price);
  };
  return (
    <>
      <h1 class="cart-header">My Cart({state.cart.length})</h1>
      <div class="cart-box">
        {
          state.cart && state.cart.map((el)=>{
            return <div key={el._id} class="cartItem-container">
            <div class="cartItem-img">
              <img src={el.image} alt="loading..." />
            </div>
            <div class="cartItem-list">
              <div class="cartItem-content">
                <p>{el.title}</p>
                <div class="item-price">
                  <h2>&#8377; {el.price}</h2>
                  <h3>
                    <del>&#8377; {discountPrice(el.price,el.discount)}</del>
                  </h3>
                </div>
                <h4>{el.discount}</h4>
                <div class="qty">
                  <p>Quantity :</p>
  
                  <span class="material-icons"
                  onClick={()=>dispatch({type:"DEC_QTY",payload:el})}> remove_circle_outline </span>
                  <div class="qty-value">{el.qty}</div>
                  <span class="material-icons" 
                  onClick={()=>dispatch({type:"INC_QTY",payload:el})}> add_circle_outline </span>
                </div>
              </div>
              <div class="cartItem-buttons">
                <button class="background">SAVE FOR LATER</button>
                <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:el})}>REMOVE</button>
              </div>
            </div>
          </div>
          })
        }
        
        
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
