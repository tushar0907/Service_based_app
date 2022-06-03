import React from "react";
import {AiOutlineLeft} from "react-icons/ai";
import {useParams, useNavigate} from "react-router-dom";

const Top = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex -mt-16 font-worksans border-b font-medium flex-col items-center h-44 w-full">
      <div className="flex w-4/5 lg:w-7/12 items-center p-5 text-xl font-semibold">
        {/* <p> Vehicle Cleaning</p>{" "} */}
        <AiOutlineLeft onClick={() => navigate(-1)} className="mr-3" />
        {params.subcategory}
      </div>
      {/* <div className="flex flex-1 p-7 justify-center">
        <div className="flex cursor-pointer justify-center rounded-lg border-2 border-[#FCB512] items-center w-56 ml-3 text-[#FCB512] hover:bg-[#FCB512] hover:text-black h-12">
          Car
        </div>
        <div className="flex cursor-pointer justify-center rounded-lg border-2 border-[#FCB512] items-center w-56 ml-3 text-[#FCB512] hover:bg-[#FCB512] hover:text-black h-12">
          Scooty
        </div>
        <div className="flex cursor-pointer justify-center rounded-lg border-2 border-[#FCB512] items-center w-56 ml-3 text-[#FCB512] hover:bg-[#FCB512] hover:text-black h-12">
          Motorcycle
        </div>
      </div> */}
    </div>
  );
};

export default Top;
