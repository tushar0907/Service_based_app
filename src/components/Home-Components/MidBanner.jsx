import React from "react";

const MidBanner = (props) => {
  return (
    <div
      className="flex p-10 mx-4 flex-col bg-no-repeat bg-cover mt-10 ml-auto mr-auto h-72 rounded-lg w-full"
      style={{
        backgroundImage: `url(${props.image}`,
      }}>
      <div className="text-white flex flex-1 text-2xl">YOU ARE SECURED</div>
      <div className="text-white flex flex-1 text-left font-bold w-60">
        {props.description}
      </div>
    </div>
  );
};

export default MidBanner;
