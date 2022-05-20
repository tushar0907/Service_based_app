import React from "react";
import Location from "../components/Checkout/location";
import Payment from "../components/Checkout/schedule";
import Schedule from "../components/Checkout/payment";

const checkout = () => {
  return (
    <div className="flex h-full w-3/4 flex-col">
      <Location />
      <Payment />
      <Schedule />
    </div>
  );
};

export default checkout;
