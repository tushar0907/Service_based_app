import React from "react";
import CartBanner from "../components/CartDetails/CartBanner";
import CartInfo from "../components/CartDetails/CartInfo";
import CartOffers from "../components/CartDetails/CartOffers";
import FAQs from "../components/CartDetails/FAQs";
import Review from "../components/CartDetails/Review";

const CartPage = () => {
  return (
    <div className="flex h-full flex-col w-full items-center">
      <CartBanner />
      <CartInfo />
      <CartOffers />
      <FAQs />
      <Review />
    </div>
  );
};

export default CartPage;
