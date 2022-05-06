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
import { RequiresAuth } from "./RequiresAuth/RequiresAuth";
import { useAuth } from "./context/AuthContext/AuthContext";
import { ProfilePage } from "./pages/ProfilePage";
import { AddressFormPage } from "./pages/AddressFormPage";
import { AddressPage } from "./pages/AddressPage";



export const App = () => {
  const { token } = useAuth()
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/preview/:productId" element={<PreviewPage />} />
      <Route path="/wishlist" element={
        <RequiresAuth token={token}>
          <WishListPage />
        </RequiresAuth>
      } />
      <Route path="/cart" element={
        <RequiresAuth token={token}>
          <CartPage />
        </RequiresAuth>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/toast" element={<Toast />} />
      <Route path="/profile" element={
        <RequiresAuth token={token}>
          <ProfilePage />
        </RequiresAuth>
      } />
      <Route path="/address" element={
        <RequiresAuth token={token}>
          <AddressFormPage />
        </RequiresAuth>
      } />
      <Route path="/add" element={
        <RequiresAuth token={token}>
          <AddressPage />
        </RequiresAuth>
      } />
    </Routes>
  </>
}

