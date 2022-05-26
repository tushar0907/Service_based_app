import React from "react";

const Bill = ({total}) => {
  return (
    <div className="flex font-worksans flex-col  p-11 w-full h-4/5 mb-2">
      <div className="flex flex-1">
        <div className="flex p-5 flex-col w-96 rounded-xl border-dashed border-2 border-black h-48">
          <div className="flex text-lg font-medium">Bill summary</div>
          <div className="flex font-bold p-3 flex-1 justify-center items-start flex-col">
            <h1 className="flex justify-around w-full">
              <div className="flex flex-1">Items Total</div>
              <div className="flex flex-1">₹ {total}</div>
            </h1>
            <p className="flex text-[#FCB512] justify-around w-full">
              <div className="flex flex-1">Discount</div>
              <div className="flex flex-1">₹ 0</div>
            </p>
          </div>
          <div className="flex font-bold justify-around p-3 w-full">
            <div className="flex flex-1">You Pay</div>
            <div className="flex flex-1">₹ {total}</div>
          </div>
        </div>
      </div>
      <div className="flex h-16 w-96 rounded-xl bg-gradient-to-r from-[#FFD36F] p-3 to-[#F1Ad10]">
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col items-start font-bold text-lg justify-center mr-5">
            <p>₹ 10,000</p>
          </div>
          <button className="flex cursor-pointer flex-1 justify-end items-center font-bold rounded-2xl">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
