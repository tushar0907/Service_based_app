import React from "react";

const ObjectDetail = () => {
  return (
    <div className="flex h-56 p-5 border-b-2 border-[#FCB512] font-bold flex-col w-full">
      <div className="flex text-lg py-4">Order Now</div>
      <div className="flex flex-1 text-lg">
        <h1 className="flex flex-1">Items:</h1>
        <p className="flex flex-1">1</p>
      </div>
      <div className="flex flex-1 text-lg">
        <h1 className="flex flex-1">You Pay:</h1>
        <p className="flex flex-1">₹9,500.00</p>
      </div>
      <div className="flex flex-1 text-lg">
        <h1 className="flex flex-1">You Say:</h1>
        <p className="flex flex-1">₹500.00</p>
      </div>
    </div>
  );
};

export default ObjectDetail;
