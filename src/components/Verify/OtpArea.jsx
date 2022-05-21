import React from "react";

const OtpArea = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-3/5 drop-shadow-lg justify-around">
        <input type="number" className="border h-20 w-20 rounded-lg" />
        <input type="number" className="border h-20 w-20 rounded-lg" />
        <input type="number" className="border h-20 w-20 rounded-lg" />
        <input type="number" className="border h-20 w-20 rounded-lg" />
      </div>
      <div className="flex my-6 justify-end w-3/5">
        <div className="flex">
          Resend Code in&nbsp; <p className="font-bold">2:43</p>
        </div>
      </div>
      <button className="flex my-20 w-2/6 h-16 justify-center items-center font-bold rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        Verify Now
      </button>
    </div>
  );
};

export default OtpArea;
