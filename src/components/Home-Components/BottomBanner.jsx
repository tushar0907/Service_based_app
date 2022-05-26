import React from "react";

const BottomBanner = () => {
  return (
    <div
      className="flex scale-100 flex-col bg-[length:1250px_420px] bg-no-repeat w-full h-96 rounded-lg"
      style={{
        backgroundImage: `url(${require("../../assets/poster.png")}`,
      }}>
      <div className="text-white ml-auto flex flex-1 text-2xl"></div>
      <div className="text-white ml-auto flex flex-1 text-right font-bold w-60"></div>
    </div>
  );
};

export default BottomBanner;
