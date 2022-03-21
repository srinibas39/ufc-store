import "./App.css";
import { EquipmentCategory } from "./components/EquipmentCategory/EquipmentCategory";
import { FighterCategory } from "./components/FighterCategory/FighterCategory";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/NavBar/NavBar";


const App=()=>{
  return <>
  <Navbar/>
  <Hero/>
  <FighterCategory/>
  <EquipmentCategory/>
  <Footer/>
  </>
}

export default App;
