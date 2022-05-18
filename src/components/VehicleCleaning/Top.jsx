import React from "react";
import {AiOutlineDown} from "react-icons/ai";

const Top = () => {
  return (
    <div className="flex font-worksans font-medium flex-col  h-44 w-full">
      <div className="flex justify-center p-5 text-lg">
        <p> Vehicle Cleaning</p>{" "}
        <AiOutlineDown className="flex h-5 pt-2 ml-6" />
      </div>
      <div className="flex flex-1 p-7 justify-center">
        <div className="flex cursor-pointer justify-center rounded-lg border-2 border-[#FCB512] items-center w-56 ml-3 text-[#FCB512] hover:bg-[#FCB512] hover:text-black h-12">
          Car
        </div>
        <div className="flex cursor-pointer justify-center rounded-lg border-2 border-[#FCB512] items-center w-56 ml-3 text-[#FCB512] hover:bg-[#FCB512] hover:text-black h-12">
          Scooty
        </div>
        <div className="flex cursor-pointer justify-center rounded-lg border-2 border-[#FCB512] items-center w-56 ml-3 text-[#FCB512] hover:bg-[#FCB512] hover:text-black h-12">
          Motorcycle
        </div>
      </div>
    </div>
  );
};

export default Top;
