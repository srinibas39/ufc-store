import { useFilter } from "../../context/FilterContext/FilterContext";

export const WishList = () => {

    const {state}=useFilter()

  return (
    <>
      <div class="wishList">
       {
         state.wishList && state.wishList.map((el)=>{
           return  <div key={el._id} class="product-container">
           <div class="product-img">
             <img src={require("../../images/product-img1.jpg")} alt="loading..." />
             <div class="product-like pink">
               <span class="material-icons"> favorite </span>
             </div>
           </div>
           <div class="product-list">
             <p>UFC VENUM Authentic Fight Night Men's Walkout Jersey</p>
             <h2>&#8377; 2000</h2>
             <button class="background">
               <a class="link" href="../pages/Cart.html">
                 Move to cart
               </a>
             </button>
           </div>
         </div>
         })
       }
       
      </div>
    </>
  );
};
