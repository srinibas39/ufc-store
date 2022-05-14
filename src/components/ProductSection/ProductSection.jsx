
import { useProduct } from "../../context/ProductContext/ProductContext";
import { AllProducts } from "../AllProducts/AllProducts";
import { Filter } from "../Filter/Filter";

export const ProductSection = () => {

  const { prodState } = useProduct();
  
 
  return (
    <section className="product-section">
      <Filter allProducts={ prodState.allProducts} />
      <AllProducts allProducts={ prodState.allProducts} />
    </section>
  );
};
