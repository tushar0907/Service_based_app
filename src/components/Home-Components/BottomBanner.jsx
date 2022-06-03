import React from "react";

const BottomBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[32rem] w-full overflow-x-hidden mb-20 bg-gradient-to-r from-[#edfbfe] via-[#faf5fe] to-[#effafe] ">
      <div className="flex flex-col font-bold text-5xl justify-center items-center w-full h-44">
        Join us to receive a better and
        <span className="flex mt-3">more convenient service from us</span>{" "}
      </div>

      <button className="flex bg-[#ff6b2b] text-white h-12 w-40 items-center font-medium justify-center rounded-lg mt-10">
        Get Now
      </button>
    </div>
  );
};

export default BottomBanner;
