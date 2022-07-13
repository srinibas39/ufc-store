import { Navbar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Address } from "../components/Address/Address";

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
