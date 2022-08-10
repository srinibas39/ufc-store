import { useEffect, useState } from "react";
import { useMode } from "../../context/ModeContext/ModeContext";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { AllProducts } from "../AllProducts/AllProducts";
import { Filter } from "../Filter/Filter";

export const ProductSection = () => {
  const { prodState } = useProduct();
  const [filterOpen, setFilterOpen] = useState(true);
  const { mode } = useMode();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setFilterOpen(true);
      }
    });
  }, []);

  return (
    <section className="product-section">
      {filterOpen ? (
        // @ts-ignore
        <Filter
          allProducts={prodState.allProducts}
          setFilterOpen={setFilterOpen}
        />
      ) : (
        <div className="filter-cap" onClick={() => setFilterOpen(true)} id={mode ? `dark` : ""}>
          Filter
          <span className="material-symbols-outlined">filter_alt</span>
        </div>
      )}

      <AllProducts allProducts={prodState.allProducts} />
    </section>
  );
};
