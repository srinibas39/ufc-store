import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { PreviewPage } from "./pages/PreviewPage";
import { Products } from "./pages/Products";


const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  </>
}

export default App;
