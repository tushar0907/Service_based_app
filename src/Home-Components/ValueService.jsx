import React from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const ValueService = () => {
  return (
    <div className="flex justify-center font-worksans">
      <div className="flex flex-col items-center w-full p-8 h-72">
        <div className="flex mr-auto pl-56 text-lg mr-80s font-bold p-3">
          Value Added Services
        </div>
        <div className="flex flex-1 w-3/4">
          <div className="flex justify-center flex-1 flex-col items-center rounded-lg mr-4 bg-yellow-100">
            <img
              src={image}
              style={{height: "40%", width: "40%"}}
              alt="guard"
            />
            <div className="flex w-20 pt-3 font-medium">Security Guards</div>
          </div>
          <div className="flex justify-center items-center flex-col flex-1 rounded-lg mr-4 bg-yellow-100">
            <img
              src={image1}
              style={{height: "40%", width: "30%"}}
              alt="guard"
            />
            <div className="flex w-20 pt-3 font-medium">Security Guards</div>
          </div>
          <div className="flex justify-center items-center flex-col flex-1 rounded-lg mr-4 bg-yellow-100">
            <img
              src={image4}
              style={{height: "40%", width: "30%"}}
              alt="guard"
            />
            <div className="flex w-20 pt-3 font-medium">Security Guards</div>
          </div>
          <div className="flex justify-center items-center flex-col flex-1 rounded-lg bg-yellow-100">
            <img
              src={image3}
              style={{height: "40%", width: "30%"}}
              alt="guard"
            />
            <div className="flex w-20 pt-3 font-medium">Security Guards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueService;
