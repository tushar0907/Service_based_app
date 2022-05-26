import React from "react";

const Advertise = () => {
  return (
    <div className="flex p-7 flex-col font-worksans pt-5 h-64 mt-20 bg-[#e9c593] rounded-">
      <div className="flex pl-5 pt-4 justify-start items-center text-2xl font-bold">
        Earn ₹ 750 for every Friend you Refer
      </div>
      <div className="flex  flex-1">
        <div className="flex flex-col text-left pl-5 pt-5 w-64">
          Get your friends join the S8 App and get 750 INR for every successful
          refer.
          <button className="flex font-bold text-xl justify-center items-center mt-3 h-10 rounded-2xl bg-gradient-to-r from-[#fdb513] to-[#febb1f]">
            Refer Now
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <img
            src={require("../../assets/Advertise.png")}
            alt="person"
            width="240"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
