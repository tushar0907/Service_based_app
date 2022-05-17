import React from "react";

const Quotes = () => {
  return (
    <div className="flex font-worksans">
      <div className="flex justify-around h-72 mt-10 px-2 ">
        <div className="flex flex-1 flex-col rounded-2xl mr-4 bg-pink-200">
          <div className="flex flex-1 justify-center ml-4 items-center text-3xl border-b border-black font-bold">
            Lorem Ipsum
          </div>
          <div className="flex flex-1 font-medium justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
          </div>
        </div>
        <div className="flex flex-1 flex-col rounded-2xl mr-4 bg-[#D7F3B2]">
          <div className="flex flex-1 justify-center w-40 ml-4 items-center text-3xl border-b border-black font-bold">
            Lorem Ipsum
          </div>
          <div className="flex flex-1 font-medium justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
          </div>
        </div>
        <div className="flex flex-1 flex-col rounded-2xl mr-4 bg-[#AAEEE2]">
          <div className="flex flex-1 justify-center w-40 ml-4 items-center text-3xl border-b border-black font-bold">
            Lorem Ipsum
          </div>
          <div className="flex flex-1 font-medium justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
          </div>
        </div>
        <div className="flex flex-1 flex-col rounded-2xl bg-[#B2CAEE]">
          <div className="flex flex-1 justify-center w-40 ml-4 items-center text-3xl border-b border-black font-bold">
            Lorem Ipsum
          </div>
          <div className="flex flex-1 font-medium justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
