import React from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const ValueService = () => {
  return (
    <div className="flex pl-20 flex-col h-60 p-5">
      <div className="flex text-lg font-bold pl-40 p-3">
        Value Added Services
      </div>
      <div className="flex flex-1 w-2/3 ml-auto mr-60">
        <div className="flex flex-1 justify-center items-center flex-col rounded-lg mr-4 bg-yellow-100">
          <img src={image4} style={{height: "40%", width: "40%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
        <div className="flex flex-1 justify-center items-center flex-col rounded-lg mr-4 bg-yellow-100">
          <img src={image3} style={{height: "40%", width: "35%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
        <div className="flex flex-1 justify-center items-center flex-col rounded-lg mr-4 bg-yellow-100">
          <img src={image} style={{height: "40%", width: "40%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
        <div className="flex flex-1 justify-center items-center flex-col rounded-lg bg-yellow-100">
          <img src={image1} style={{height: "40%", width: "35%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
      </div>
    </div>
  );
};

export default ValueService;
