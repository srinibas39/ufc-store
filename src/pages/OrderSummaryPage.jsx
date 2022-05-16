import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { OrderSummary } from "../components/OrderSummary/OrderSummary";

export const OrderSummaryPage = () => {
  return (
    <>
      <Navbar />
      <AutoComplete />
      <OrderSummary />
      <Footer/>
    </>
  );
};
