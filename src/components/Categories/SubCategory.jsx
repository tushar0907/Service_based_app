import React from "react";

const SubCategory = () => {
  return (
    <div className="flex  flex-col flex-1 border-b border-[#FCB512]">
      <div className="flex font-worksans font-medium text-lg p-6 pl-8">
        Categories
      </div>
      <div className="flex flex-1 items-center justify-around">
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
            <img
              className="h-20"
              src={require("../../assets/Washcar.png")}
              alt="construction"
            />
          </div>
          Vehicle Washing
        </div>
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
            <img
              className="h-20"
              src={require("../../assets/Interior.png")}
              alt="construction"
            />
          </div>
          Interior Cleaning
        </div>
        <div className="flex items-center flex-col">
          {" "}
          <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
            <img
              className="h-20"
              src={require("../../assets/Ac.png")}
              alt="construction"
            />
          </div>
          AC Filter Cleaning
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
