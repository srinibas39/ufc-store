import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/NavBar/NavBar";
import { ProductSection } from "../components/ProductSection/ProductSection";


export const Products = () => {


  return (
    <>
      <Navbar />
      <AutoComplete/>
      <Hero />
      <ProductSection />
      <Footer />
     
    </>
  );
};
