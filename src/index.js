import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./content/files/ProductContext";
import CartProvider from "./content/files/CartContext";
import ItemProvider from "./content/files/ItemsContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ItemProvider>
    <ProductProvider>
      <CartProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </CartProvider>
    </ProductProvider>
  </ItemProvider>
);
