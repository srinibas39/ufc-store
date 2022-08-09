import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AddToWishList } from "../AddToWishList/AddToWishList";
import "./Preview.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const Preview = () => {
  const { productId } = useParams();
  const { getProduct } = useProduct();
  const [size, setSize] = useState("");
  const { mode } = useMode();

  const product = getProduct(productId);

  return (
    <>
      {product && (
        <div className="preview" id={mode ? `dark` : ""}>
          <div className="preview-img">
            <img src={product.image} alt="loading..." />
            <AddToWishList el={product} />
          </div>
          <div className="preview-description">
            <h1 className="preview-header">{product.title}</h1>
            <h1>&#8377; {product.price}</h1>
            <div>
              <p>
                <span style={{ fontWeight: "bold" }}>Select size</span> Medium
              </p>
              <div className="btn-sizes-container">
                <button id={size==="SMALL" ? "select":""} onClick={(e:any)=>setSize(e.target.textContent)}>SMALL</button>
                <button id={size==="MEDIUM" ? "select":""}  onClick={(e:any)=>setSize(e.target.textContent)}>MEDIUM</button>
                <button id={size==="LARGE" ? "select":""} onClick={(e:any)=>setSize(e.target.textContent)}>LARGE</button>
              </div>
            </div>
            <AddToCartButton el={product} />
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
