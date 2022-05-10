import { Navbar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Address } from "../components/Address/Address";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";

export const AddressPage = () => {
  return (
    <>
      <Navbar />
      <AutoComplete />
      <Address />
      <Footer />
    </>
  );
};
