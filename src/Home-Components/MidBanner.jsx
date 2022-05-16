import React from "react";

const MidBanner = () => {
  return (
    <div
      className="flex font-worksans p-10 pl-6 flex-col bg-no-repeat bg-cover mt-10 ml-auto mr-auto h-44 w-1/2"
      style={{
        backgroundImage: `url(${require("../assets/BgBottom.jpg")}`,
      }}>
      <div className="text-white flex flex-1 text-2xl">YOU ARE SECURED</div>
      <div className="text-white flex flex-1 text-left font-bold w-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt{" "}
      </div>
    </div>
  );
};

export default MidBanner;
