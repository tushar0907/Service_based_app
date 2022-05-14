import React from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Schedule = () => {
  return (
    <div className="flex pl-20 flex-col p-4 h-60">
      <div className="flex text-lg font-bold pl-40 p-3">Scheduled Services</div>
      <div className="flex flex-1 w-2/3 ml-auto mr-60">
        <div className="flex justify-center flex-1 flex-col items-center rounded-lg mr-4 bg-yellow-100">
          <img src={image} style={{height: "40%", width: "40%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
        <div className="flex justify-center items-center flex-col flex-1 rounded-lg mr-4 bg-yellow-100">
          <img src={image1} style={{height: "40%", width: "30%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
        <div className="flex justify-center items-center flex-col flex-1 rounded-lg mr-4 bg-yellow-100">
          <img src={image2} style={{height: "40%", width: "30%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
        <div className="flex justify-center items-center flex-col flex-1 rounded-lg bg-yellow-100">
          <img src={image3} style={{height: "40%", width: "30%"}} alt="guard" />
          <div className="flex w-20 pt-3 font-medium">Security Guards</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
