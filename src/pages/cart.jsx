import React from "react";
import Instructions from "../components/MyCart/Instructions";
import Bill from "../components/MyCart/Bill";

const cart = () => {
  return (
    <div className="flex flex-col h-full w-3/4">
      <Instructions />
      <Bill />
    </div>
  );
};

export default cart;
