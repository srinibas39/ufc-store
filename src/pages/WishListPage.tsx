import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { WishList } from "../components/WishList/WishList";
import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";

export const WishListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AutoComplete />
      <WishList />
      <Footer />
    </>
  );
};
