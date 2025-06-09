import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
