import React from "react";
import {GrFormClose} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";

const BottomArea = () => {
  return (
    <div className="flex flex-col h-2/4 w-full">
      <div className="flex flex-col h-56 justify-around items-center">
        <div className="flex h-10 rounded-xl">
          <div className="flex justify-center h-10 items-center w-16 rounded-l-xl font-bold border">
            <CgProfile size="30" />
          </div>
          <input
            type="number"
            className="border w-96"
            placeholder="Enter FULL NAME"
          />
          <GrFormClose className="flex border h-10 w-10 rounded-r-xl" />
        </div>
        <div className="flex h-10 rounded-xl">
          <div className="flex h-10 justify-center items-center w-16 rounded-l-xl font-bold border">
            +91
          </div>
          <input
            type="number"
            className="border w-96"
            placeholder="Enter Mobile Number"
          />
          <GrFormClose className="flex border h-10 w-10 rounded-r-xl" />
        </div>
        <div className="flex w-72">
          <input type="checkbox" className="flex h-10 w-10 mx-6" />
          <p>
            By checking you agree to our Terms and Condition and Privacy Policy
          </p>
        </div>
      </div>
      <div className="flex flex-col h-56  items-center justify-around w-full">
        <div className="flex w-96 h-12 justify-center items-center bg-gradient-to-r from-[#FFD36F] to-[#F1AD10] rounded-lg font-medium text-md">
          Send OTP
        </div>
        <div className="flex w-80 h-12 items-center justify-center border-b">
          OR NEW HERE?
        </div>
        <div className="flex w-96 h-10 items-center justify-center rounded-lg border-2 border-[#FCB512] text-[#FCB512] font-medium text-md">
          LOGIN
        </div>
      </div>
    </div>
  );
};

export default BottomArea;
