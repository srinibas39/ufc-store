import { useEffect } from "react";
import { AddressForm } from "../components/AddressForm/AddressForm";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";

export const AddressFormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AutoComplete />
      <AddressForm />
      <Footer />
    </>
  );
};
