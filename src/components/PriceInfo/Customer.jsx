import React from "react";

const Customer = () => {
  return (
    <div className="flex h-3/4 mt-6 flex-col w-full">
      <div className="flex p-5 flex-1 flex-col h-full w-full">
        <div className="flex flex-1 font-bold text-lg">Bought By:</div>
        <div className="flex flex-1">Aryan Negi</div>
      </div>
      <div className="flex p-5 flex-1 flex-col h-full w-full">
        {" "}
        <div className="flex flex-1 font-bold text-lg">Pickup Location:</div>
        <div className="flex flex-1">
          Shop No.3/36A, Maharaja Agrasen Marg, UV Block, Shalimar Bagh, Delhi,
          110088
        </div>
      </div>
      <div className="flex p-5 flex-1 flex-col h-full w-full">
        {" "}
        <div className="flex flex-1 font-bold text-lg">Service Booked For:</div>
        <div className="flex flex-1 flex-col">
          <p>13-Apr, 2022 | Wednesday</p>
          <h2>1 PM - 2 PM</h2>
        </div>
      </div>
      <div className="flex flex-1 p-5 flex-col h-full w-full">
        {" "}
        <div className="flex flex-1 font-bold text-lg">Paying With:</div>
        <div className="flex flex-1 flex-col">
          <p>Mastercard</p>
          <h2>****8443</h2>
        </div>
      </div>
      <div className="flex items-center text-xl justify-center font-bold h-20 w-3/5 my-3 rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        <p>Pay Now</p>
      </div>
    </div>
  );
};

export default Customer;
