import React from "react";

const CartBanner = () => {
  return (
    <div className="flex flex-1 font-worksans pt-7 flex-col w-3/4 h-3/6">
      <div className="flex font-bold p-3 text-2xl">
        <h1>Sedan Washing</h1>
      </div>
      <div className="flex flex-1 justify-left items-center">
        <img
          className="h-96 w-4/5 rounded-lg"
          src={require("../../assets/CartBanner.jpg")}
          alt="construction"
        />
      </div>
    </div>
  );
};

export default CartBanner;