import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col h-3/5 font-worksans w-full">
      <div className="flex justify-start items-center p-5 font-bold text-md">
        Refer and Earn
      </div>
      <div className="flex p-5 justify-center">
        <img className="flex h-60" src={require("../../assets/mic.png")} />
      </div>
      <div className="flex p-5 justify-center">
        <div className="flex h-16 w-3/5 rounded-xl border-2 border-[#FCB512]">
          <input
            type="text"
            placeholder="ENTER REFER CODE"
            className="flex pl-4 rounded-xl h-full w-full"
          />
          <div className="flex w-32 rounded-r-xl items-center justify-center bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
            Apply
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 h-56 items-center w-full border-b-2">
        <div className="flex font-bold p-1 text-lg">Total points Earned</div>
        <div className="flex font-bold text-5xl text-[#FCB512]">1690</div>
      </div>
    </div>
  );
};

export default Banner;
