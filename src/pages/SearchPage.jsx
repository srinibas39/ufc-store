import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { SearchResult } from "../components/SearchResult/SearchResult";
import { Toast } from "../components/Toast/Toast";
import { useProduct } from "../context/ProductContext/ProductContext";

export const SearchPage = () => {
  const { toastLoading, setToastLoading, toastText } = useProduct();
  useEffect(() => {
    const timer = setTimeout(() => setToastLoading(false), 500);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <Navbar />
      <AutoComplete />
      <SearchResult />
      <Footer />
      {toastLoading ? <Toast text={toastText} /> : ""}
    </>
  );
};
