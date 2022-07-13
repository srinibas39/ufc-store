import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Cart } from "../components/Cart/Cart";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { Toast } from "../components/Toast/Toast";
import { useProduct } from "../context/ProductContext/ProductContext";

export const CartPage = () => {
  const { toastLoading, setToastLoading, toastText } = useProduct();

  useEffect(() => {
    const timer = setTimeout(() => setToastLoading(false), 500);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <Navbar />
      <AutoComplete />
      <Cart />
      <Footer />
      {toastLoading ? <Toast text={toastText} /> : ""}
    </>
  );
};
