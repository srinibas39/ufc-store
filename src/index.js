import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(

  <BrowserRouter>
   
      <App />
    
  </BrowserRouter>
  ,
  document.getElementById("root")
);
