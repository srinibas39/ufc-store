import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EquipmentCategory } from "./components/EquipmentCategory/EquipmentCategory";
import { FighterCategory } from "./components/FighterCategory/FighterCategory";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";


const App=()=>{
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
  </Routes>
  </>
}

export default App;
