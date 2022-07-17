import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { WishList } from "../components/WishList/WishList";
import { useProduct } from "../context/ProductContext/ProductContext";
import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";

export const WishListPage = () => {

  return (
    <>
      <Navbar />
      <AutoComplete />
      <WishList />
      <Footer />
    </>
  );
};
