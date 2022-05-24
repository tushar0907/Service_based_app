import React from "react";
import {useSelector} from "react-redux";

const Text = () => {
  const ph_number = useSelector((state) => state.login.ph_number);
  return (
    <div className="flex mt-16 items-center flex-col w-full">
      <div className="flex items-center flex-col">
        <h1 className="flex justify-center font-bold p-2 text-4xl text-[#FCB512]">
          VERIFY NOW
        </h1>
        <p className="flex w-3/4 pl-10 pb-10 text-lg font-medium p-2">
          Please enter the OTP that we have sent to your phone number ending
          with *****
          {String(ph_number).slice(5, 9)}
        </p>
      </div>
      <div className="flex">
        <img className="h-80" src={require("../../assets/art.png")} />
      </div>
    </div>
  );
};

export default Text;
