import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupPage } from "./pages/SignupPage";
import { CartPage } from "./pages/CartPage";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { PreviewPage } from "./pages/PreviewPage";
import { Products } from "./pages/Products";
import { WishListPage } from "./pages/WishListPage";
import { Toast } from "./components/Toast/Toast";


export const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/preview/:productId" element={<PreviewPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/toast" element={<Toast />} />

    </Routes>
  </>
}

