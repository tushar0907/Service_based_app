import React from "react";
import {AiFillCloseCircle} from "react-icons/ai";

const Instructions = () => {
  return (
    <div className="flex drop-shadow-lg p-5 font-worksans font-medium w-full flex-col">
      <div className="flex font-bold text-lg">
        <p>My Cart</p>
      </div>
      <div className="flex mt-8 rounded-xl w-2/4 ml-4 flex-col border flex-1">
        <div className="flex p-6 border-b">
          <div
            className="flex bg-no-repeat w-20"
            style={{
              backgroundImage: `url(${require("../../assets/washing.png")}`,
            }}></div>
          <div className="flex flex-1 font-bold flex-col">
            <p>Sedan Washing</p>
            <p>₹ 17000</p>
          </div>
          <div className="flex">
            <AiFillCloseCircle size="30" />
          </div>
        </div>
        <div className="flex h-24 p-4 items-center">
          <input
            className="flex rounded-xl p-4 bg-[#EEEEEE] h-20 flex-1"
            type="text"
            placeholder="Add Instructions"
          />
        </div>
      </div>
      <div className="flex flex-1 rounded-xl mx-4 border w-1/2 mt-10 border-[#FCB512]">
        <div className="flex flex-1">
          <input
            type="text"
            className="flex w-full h-12 rounded-l-xl p-1"
            placeholder="ENTER PROMO CODE"
          />
        </div>
        <div className="flex items-center pl-4 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10] rounded-r-xl w-24">
          Apply
        </div>
      </div>
    </div>
  );
};

export default Instructions;
