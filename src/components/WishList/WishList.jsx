import { useFilter } from "../../context/FilterContext/FilterContext";

export const WishList = () => {

    const {state}=useFilter()

  return (
    <>
      <div className="wishList">
       {
         state.wishList && state.wishList.map((el)=>{
           return  <div key={el._id} className="product-container">
           <div className="product-img">
             <img src={require("../../images/product-img1.jpg")} alt="loading..." />
             <div className="product-like pink">
               <span className="material-icons"> favorite </span>
             </div>
           </div>
           <div className="product-list">
             <p>UFC VENUM Authentic Fight Night Men's Walkout Jersey</p>
             <h2>&#8377; 2000</h2>
             <button className="background">
               <a className="link" href="../pages/Cart.html">
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
