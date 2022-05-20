import React from "react";
import {MdLocationPin} from "react-icons/md";
import {FaFileSignature} from "react-icons/fa";

const location = () => {
  return (
    <div className="flex font-worksans flex-col h-40 mt-8 w-full">
      <div className="flex font-medium pl-5 text-md p-2">Checkout</div>
      <div className="flex flex-col p-3 flex-1">
        <div className="flex flex-1 pl-3 font-bold text-lg">
          Location for Pickup
        </div>
        <div className="flex flex-1  border-b border-[#FCB512] w-7/12">
          <div className="flex items-center p-2">
            <MdLocationPin size="20" />
          </div>
          <div className="flex flex-1 justify-start items-center font-medium text-sm">
            <p>
              Shop No.3/36A, Maharaja Agrasen Marg, UV Block, Shalimar Bagh,
              Delhi, 11088
            </p>
          </div>
          <div className="flex pl-6 pt-2">
            <FaFileSignature size="20" style={{color: "#FCB512"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default location;
