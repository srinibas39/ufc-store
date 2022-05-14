import { AutoComplete } from "../components/AutoComplete/AutoComplete";
import { EquipmentCategory } from "../components/EquipmentCategory/EquipmentCategory";
import { FighterCategory } from "../components/FighterCategory/FighterCategory";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/NavBar/NavBar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <AutoComplete />
      <Hero />
      <EquipmentCategory />
      <FighterCategory />
      <Footer />
    </>
  );
};
