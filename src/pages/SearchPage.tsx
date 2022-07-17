import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { SearchResult } from "../components/SearchResult/SearchResult";


export const SearchPage = () => {

  return (
    <>
      <Navbar />
      <AutoComplete />
      <SearchResult />
      <Footer />
    
    </>
  );
};
