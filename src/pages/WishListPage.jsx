import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { WishList } from "../components/WishList/WishList";
import { useProduct } from "../context/ProductContext/ProductContext";
import { useEffect } from "react";
import { Toast } from "../components/Toast/Toast";

export const WishListPage = () => {
  const { toastLoading, setToastLoading, toastText } = useProduct();

  useEffect(() => {
    const timer = setTimeout(() => setToastLoading(false), 500);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <Navbar />
      <WishList />
      <Footer />
      {toastLoading ? <Toast text={toastText} /> : ""}
    </>
  );
};
