
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AddressProvider } from "./context/AddressContext/AddressContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { ProductProvider } from "./context/ProductContext/ProductContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(

  <AuthProvider>
    <AddressProvider>
      <ProductProvider>
        <FilterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilterProvider>
      </ProductProvider>
    </AddressProvider>
  </AuthProvider>

  ,
  document.getElementById("root")
);
