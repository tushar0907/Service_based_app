import React from "react";
import {Route, Routes} from "react-router-dom";
import Category from "../pages/category";
import Home from "../pages/home";
import ProductDesign from "../pages/ProductDesign";
import Product from "../pages/product";
import MyCart from "../pages/cart";
import Checkout from "../pages/checkout";
import Profile from "../pages/profile";
import PriceDetails from "../pages/PriceDetails";
import ReferPage from "../pages/Referpage";
import CoupanPage from "../pages/CouponPage";
import CarrierPage from "../pages/CarrierPage";
import OrderDetails from "../pages/OrderDetails";
import BalancePage from "../pages/BalancePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import VerifyPage from "../pages/VerifyPage";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:subcategory/:scid" element={<Product />} />
      <Route path="/category" element={<Category />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:sid" element={<ProductDesign />} />
      <Route path="/mycart" element={<MyCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pricedetails" element={<PriceDetails />} />
      <Route path="/coupon" element={<CoupanPage />} />
      <Route path="/referpage" element={<ReferPage />} />
      <Route path="/carrier" element={<CarrierPage />} />
      <Route path="/orderdetails" element={<OrderDetails />} />
      <Route path="/balance" element={<BalancePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify" element={<VerifyPage />} />
    </Routes>
  );
}
