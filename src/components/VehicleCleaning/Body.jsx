import React from "react";

const Body = () => {
  return (
    <div
      className="flex border font-worksans font-medium p-10 bg-contain bg-right bg-no-repeat flex-col h-72 w-7/12 rounded-3xl"
      style={{
        backgroundImage: `url(${require("../../assets/car.jpg")}`,
      }}>
      <div className="flex flex-1 text-xl font-bold">Hatchback</div>
      <div className="flex flex-1 w-80">
        <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col items-start font-bold text-lg justify-center mr-5">
          <p>₹ 10,000</p>
        </div>
        <button className="flex cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-gradient-to-r from-[#FFD36F] to-[#F1Ad10]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Body;
