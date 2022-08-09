import { Navbar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Address } from "../components/Address/Address";
import { useEffect } from "react";

export const AddressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AutoComplete />
      <Address />
      <Footer />
    </>
  );
};
