import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/NavBar/NavBar";
import { ProductSection } from "../components/ProductSection/ProductSection";
import { Toast } from "../components/Toast/Toast";
import { useProduct } from "../context/ProductContext/ProductContext";

export const Products = () => {
  const { toastLoading, setToastLoading, toastText} = useProduct();

  useEffect(() => {
    const timer = setTimeout(() => setToastLoading(false), 500);
  

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <Footer />
      {toastLoading ? <Toast text={toastText} /> : ""}
    </>
  );
};
