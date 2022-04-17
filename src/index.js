import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(

  <AuthProvider>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>
  </AuthProvider>

  ,
  document.getElementById("root")
);
