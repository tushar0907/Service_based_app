import React from "react";
import ProductBanner from "../components/CartDetails/ProductBanner";
import ProductInfo from "../components/CartDetails/ProductInfo";
import ProductOffers from "../components/CartDetails/ProductOffers";
import FAQs from "../components/CartDetails/FAQs";
import Review from "../components/CartDetails/Review";

const CartPage = () => {
  return (
    <div className="flex h-full flex-col w-full items-center">
      <ProductBanner />
      <ProductInfo />
      <ProductOffers />
      <Review />
      <FAQs />
    </div>
  );
};

export default CartPage;
