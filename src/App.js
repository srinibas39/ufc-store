import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartPage } from "./pages/CartPage";
import { Home } from "./pages/Home";
import { PreviewPage } from "./pages/PreviewPage";
import { Products } from "./pages/Products";
import { WishListPage } from "./pages/WishListPage";


const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </>
}

export default App;
