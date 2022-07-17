import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Cart } from "../components/Cart/Cart";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";


export const CartPage = () => {

  return (
    <>
      <Navbar />
      <AutoComplete />
      <Cart />
      <Footer />
     
    </>
  );
};
