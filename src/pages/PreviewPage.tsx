import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { Preview } from "../components/Preview/Preview";


export const PreviewPage = () => {

  return (
    <>
      <Navbar />
      <AutoComplete/>
      <Preview />
      <Footer />
      
    </>
  );
};
