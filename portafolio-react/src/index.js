import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./views/header";
import Navbar from "./modules/navbar";
import Blog from "./views/blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Blog />
  </React.StrictMode>
);
