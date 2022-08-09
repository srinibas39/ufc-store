import { useEffect } from "react";
import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";
import { Profile } from "../components/Profile/Profile";

export const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AutoComplete />
      <Profile />
      <Footer />
    </>
  );
};
