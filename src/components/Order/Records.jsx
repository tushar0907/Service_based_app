import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const Records = () => {
  return (
    <div className="flex flex-col w-3/5">
      <div className="flex  justify-center flex-col h-40 border-b border-[#ffe418] my-5 w-full">
        <div className="flex font-medium text-md">
          <div className="flex">Order Id:</div>
          <div className="flex pl-3 font-bold">12585782</div>
        </div>
        <div className="flex font-medium text-md">
          <div className="flex">Items:</div>
          <div className="flex pl-8 font-bold">3</div>
        </div>
        <div className="flex font-medium text-md">
          {" "}
          <div className="flex">Paid:</div>
          <div className="flex pl-11 font-bold">₹ 341.00</div>
        </div>
        <div className="flex font-medium text-md">
          {" "}
          <div className="flex">Status:</div>
          <div className="flex pl-6 font-bold">Dispatched</div>
          <div className="flex items-center pl-3 justify-end w-full">
            <MdOutlineKeyboardArrowRight style={{color: "#ffe418"}} size="20" />
          </div>
        </div>
      </div>
      <div className="flex  justify-center flex-col h-40 border-b border-[#ffe418] my-5 w-full">
        <div className="flex font-medium text-md">
          <div className="flex">Order Id:</div>
          <div className="flex pl-3 font-bold">12557345</div>
        </div>
        <div className="flex font-medium text-md">
          <div className="flex">Items:</div>
          <div className="flex pl-8 font-bold">4</div>
        </div>
        <div className="flex font-medium text-md">
          {" "}
          <div className="flex">Paid:</div>
          <div className="flex pl-11 font-bold">₹ 487.00</div>
        </div>
        <div className="flex font-medium text-md">
          {" "}
          <div className="flex">Status:</div>
          <div className="flex pl-6 font-bold">Delivered</div>
          <div className="flex items-center pl-3 justify-end w-full">
            <MdOutlineKeyboardArrowRight style={{color: "#ffe418"}} size="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
