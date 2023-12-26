// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const products = [
  {
    id: 1,
    name: "MacBook Air 13 M1",
    price: 1363,
    image: "macbook_air-13-m1.png",
  },
  {
    id: 2,
    name: "MacBook Air 13 M2",
    price: 1449,
    image: "macbook_air-13-m2.png",
  },
  {
    id: 3,
    name: "MacBook Air 15 M2",
    price: 1675,
    image: "macbook_air-15-m2.png",
  },
  { id: 4, name: "Iphone 15 Pro", price: 999, image: "iphone-15-pro.png" },
  { id: 5, name: "Iphone 15", price: 799, image: "iphone-15.png" },
  {
    id: 6,
    name: "Iphone 15 Pro Max",
    price: 1199,
    image: "iphone-15-pro-max.png",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App products={products} />
  </React.StrictMode>,
  document.getElementById("root")
);
