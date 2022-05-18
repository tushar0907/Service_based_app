import React from "react";

const MainCategory = () => {
  return (
    <div className="flex flex-col flex-1 border-b border-[#FCB512]">
      <div className="flex font-worksans font-medium text-lg p-6 pl-8">
        Categories
      </div>
      <div className="flex flex-1 items-center justify-around">
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
            <img
              className="h-20 "
              src={require("../../assets/construction.png")}
              alt="construction"
            />
          </div>
          Constructions
        </div>
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
            {" "}
            <img
              className="h-20 "
              src={require("../../assets/Manpower.png")}
              alt="construction"
            />
          </div>
          Manpower
        </div>
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
            {" "}
            <img
              className="h-20 "
              src={require("../../assets/Automobile.png")}
              alt="construction"
            />
          </div>
          Automobile
        </div>
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex w-40 justify-center items-center h-40 border-4 border-[#FCB512] rounded-xl">
            {" "}
            <img
              className="h-20"
              src={require("../../assets/housekeeping.png")}
              alt="construction"
            />
          </div>
          Housekeeping
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
