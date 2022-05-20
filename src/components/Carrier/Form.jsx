import React from "react";
import {BiChevronDown} from "react-icons/bi";

const Form = () => {
  return (
    <div className="flex flex-col font-worksans p-5 w-full">
      <div className="flex font-medium text-md pb-6">Basic Details*</div>
      <div className="flex h-44 justify-around flex-col">
        <input
          type="text"
          className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
          placeholder="Customer Name"
        />
        <input
          type="text"
          className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
          placeholder="Mobile Number"
        />
      </div>
      <div className="flex my-7 flex-col flex-1">
        <div className="flex text-md pv-6">
          <p className="font-medium">More Details</p>
          <p>(Optional)</p>
        </div>
        <div className="flex h-72 justify-around flex-col">
          <input
            type="text"
            className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
            placeholder="Email ID"
          />
          <input
            type="text"
            className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
            placeholder="Pincode"
          />
          <div className="flex w-3/4 h-12">
            {" "}
            <input
              type="text"
              className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-4/5"
              placeholder="Occupations"
            />
          </div>
          <input
            type="text"
            className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
            placeholder="Annual Income"
          />
          <input
            type="text"
            className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
            placeholder="PAN Number"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
