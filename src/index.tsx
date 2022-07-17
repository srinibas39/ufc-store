import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AddressProvider } from "./context/AddressContext/AddressContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { ModeProvider } from "./context/ModeContext/ModeContext";
import { ProductProvider } from "./context/ProductContext/ProductContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
    <ModeProvider>
      <AddressProvider>
        <ProductProvider>
          <FilterProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FilterProvider>
        </ProductProvider>
      </AddressProvider>
    </ModeProvider>
  </AuthProvider>,

  document.getElementById("root")
);
