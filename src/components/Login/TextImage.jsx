import React from "react";

const TextImage = () => {
  return (
    <div className="flex mt-16 items-center flex-col w-full">
      <div className="flex flex-col">
        <h1 className="flex justify-center font-bold p-2 text-4xl text-[#FCB512]">
          LOGIN NOW
        </h1>
        <p className="flex pl-5 pb-10 text-lg font-medium p-2">
          We will send OTP to your phone number
        </p>
      </div>
      <div className="flex">
        <img className="h-80" src={require("../../assets/art.png")} />
      </div>
    </div>
  );
};

export default TextImage;
