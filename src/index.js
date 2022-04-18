import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { ProductProvider } from "./context/ProductContext/ProductContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <ProductProvider>
    <AuthProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </AuthProvider>
  </ProductProvider>
  ,
  document.getElementById("root")
);
