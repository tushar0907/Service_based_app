import React from "react";
import {BsCircle} from "react-icons/bs";

const payment = () => {
  return (
    <div className="flex mt-16 w-3/5 flex-col h-4/5">
      <div className="flex pl-4 font-bold text-lg">
        <p>Select a Payment Method</p>
      </div>
      <div className="flex flex-col p-6 flex-1">
        <div className="flex flex-1 text-md pb-4 h-20 border-b border-[#FCB512]">
          <input type="radio" />
          &nbsp;&nbsp;
          <p className="flex cursor-pointer items-start">
            Citi Bank Credit Card ****8443
          </p>
        </div>
        <div className="flex flex-1 pt-8">
          {" "}
          <div className="flex flex-1 text-md h-10 border-b border-[#FCB512]">
            <input type="radio" />
            &nbsp;&nbsp;
            <p className="flex cursor-pointer items-start">Other UPI Apps</p>
          </div>
        </div>
        <div className="flex flex-1 pt-8">
          {" "}
          <div className="flex flex-1 text-md h-10 border-b border-[#FCB512]">
            <input type="radio" classname="flex items-end" />
            &nbsp;&nbsp;
            <p className="flex cursor-pointer items-start">Pay After Service</p>
          </div>
        </div>
      </div>
      <div className="flex h-30 pl-4 p-10 flex-col">
        <div className="flex border-t border-[#FCB512] flex-1 p-4 font-medium text-md">
          <div className="flex flex-1">
            <p>You Pay</p>
          </div>
          <div className="flex flex-1 justify-end">
            <p>₹ 9,500</p>
          </div>
        </div>
        <div className="flex h-16 w-full rounded-xl bg-gradient-to-r from-[#FFD36F] p-3 to-[#F1Ad10]">
          <div className="flex flex-1 flex-col items-start font-bold text-lg justify-center mr-5">
            <p>₹ 10,000</p>
          </div>
          <button className="flex cursor-pointer flex-1 justify-end items-center font-bold rounded-2xl">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default payment;
