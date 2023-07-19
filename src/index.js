import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import router
import { BrowserRouter as Router } from "react-router-dom";
// import house context provider
import CarContextProvider from "./components/CarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CarContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </CarContextProvider>
);
