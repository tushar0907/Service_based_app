import React from "react";
import {MdContentCopy} from "react-icons/md";

const CouponCode = () => {
  return (
    <div className="flex flex-1 w-full flex-col h-56">
      <div className="flex h-32 w-full items-center justify-center">
        <div className="flex rounded-xl mt-20 h-32 w-3/5 border-dashed border-[#FCB512] border-2">
          <div className="flex flex-1 items-center justify-center h-26 flex-col border-r border-black">
            <p>Your referral Code</p>
            <h1 className="flex font-bold justify-center items-center text-[#FCB512] text-5xl">
              REFER9436
            </h1>
          </div>
          <div className="flex items-center p-4">
            <MdContentCopy style={{color: "#FCB512"}} size="30" />
          </div>
        </div>
      </div>
      <div className="flex mt-20 w-full items-center justify-center flex-1">
        <div className="flex rounded-xl font-bold text-lg items-center justify-center h-20 w-3/5 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
          <p>Share referral code</p>
        </div>
      </div>
    </div>
  );
};

export default CouponCode;
