import { AddressForm } from "../components/AddressForm/AddressForm";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";

export const AddressFormPage = () => {
  return (
    <>
      <Navbar />
      <AutoComplete />
      <AddressForm />
      <Footer />
    </>
  );
};
