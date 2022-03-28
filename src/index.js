import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(

  <BrowserRouter>
    <FilterProvider>
      <App />
    </FilterProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
