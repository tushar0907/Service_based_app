import React from "react";
import {Route, Routes} from "react-router-dom";
import Category from "../pages/category";
import Home from "../pages/home";
import Product from "../pages/product";
import Profile from "../pages/profile";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/category" element={<Category />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
