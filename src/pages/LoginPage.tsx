import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Login } from "../components/Login/Login";
import { Navbar } from "../components/NavBar/NavBar";

export const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AutoComplete />
      <Login />
      <Footer />
    </>
  );
};
