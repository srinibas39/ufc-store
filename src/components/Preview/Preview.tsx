import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AddToWishList } from "../AddToWishList/AddToWishList";
import "./Preview.css"

export const Preview = () => {
  const { productId } = useParams();
  const { getProduct } = useProduct();

  const product= getProduct(productId);

  return (
    product && (
      <div className="preview">
        <div className="preview-img">
          <img src={product.image} alt="loading..." />
          <AddToWishList el={product} />
        </div>
        <div className="preview-description">
          <h1 className="Preview-header">{product.title}</h1>
          <h2>&#8377; {product.price}</h2>
          <div className="description">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              vitae officiis in distinctio! Magni obcaecati cum suscipit totam
              labore quibusdam voluptas. Expedita, praesentium eligendi? Nisi
              odio quo mollitia similique ex. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur quod et qui tempore ipsum.
              Repellat corrupti eum architecto quae cumque quos temporibus!
              Laborum quisquam, cupiditate sapiente necessitatibus debitis
              doloremque veritatis?
            </p>
            <p style={{marginTop:"1rem",fontWeight:"bold"}}>{product.stock ? "Item is in stock.":"Item is not in stock."}</p>
          </div>
          <AddToCartButton el={product} />
        </div>
      </div>
    )
  );
};
