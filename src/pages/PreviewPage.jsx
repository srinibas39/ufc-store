import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { Preview } from "../components/Preview/Preview";
import { Toast } from "../components/Toast/Toast";
import { useProduct } from "../context/ProductContext/ProductContext";

export const PreviewPage = () => {
  const { toastLoading, setToastLoading, toastText } = useProduct();

  useEffect(() => {
    const timer = setTimeout(() => setToastLoading(false), 500);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <Navbar />
      <Preview />
      <Footer />
      {toastLoading ? <Toast text={toastText} /> : ""}
    </>
  );
};
