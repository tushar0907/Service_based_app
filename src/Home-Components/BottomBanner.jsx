import React from "react";

const BottomBanner = () => {
  return (
    <div
      className="flex flex-col p-9 bg-no-repeat bg-cover mt-20 ml-auto mr-auto h-52  w-1/2"
      style={{
        backgroundImage: `url(${require("../assets/BgEnd.jpg")}`,
      }}>
      <div className="text-white ml-auto flex flex-1 text-2xl">
        YOU ARE PROTECTED
      </div>
      <div className="text-white ml-auto flex flex-1 text-right font-bold w-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt{" "}
      </div>
    </div>
  );
};

export default BottomBanner;
