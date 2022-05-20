import React from "react";

const Options = () => {
  return (
    <div className="flex h-72  border-b-2 border-[#FCB512] flex-col my-10 w-full">
      <div className="flex font-bold pl-5 text-md">Carrier</div>
      <div className="flex h-40 justify-around w-full p-6">
        <div className="flex h-44 flex-col">
          <div className="flex mx-5 w-32 items-center justify-center rounded-xl h-32 border-2 border-[#FCB512] hover:bg-[#FCB512]">
            <img
              style={{height: "90px"}}
              src={require("../../assets/construction.png")}
            />
          </div>
          <p className="flex items-center justify-center">Constructions</p>
        </div>
        <div className="flex h-44 flex-col">
          <div className="flex mx-5 w-32 items-center justify-center rounded-xl h-32 border-2 border-[#FCB512] hover:bg-[#FCB512]">
            <img
              style={{height: "90px"}}
              src={require("../../assets/construction.png")}
            />
          </div>
          <p className="flex items-center justify-center">Constructions</p>
        </div>
        <div className="flex h-44 flex-col">
          <div className="flex mx-5 w-32 items-center justify-center rounded-xl h-32 border-2 border-[#FCB512] hover:bg-[#FCB512]">
            <img
              style={{height: "90px"}}
              src={require("../../assets/construction.png")}
            />
          </div>
          <p className="flex items-center justify-center">Constructions</p>
        </div>
        <div className="flex h-44 flex-col">
          <div className="flex mx-5 w-32 items-center justify-center rounded-xl h-32 border-2 border-[#FCB512] hover:bg-[#FCB512]">
            <img
              style={{height: "90px"}}
              src={require("../../assets/construction.png")}
            />
          </div>
          <p className="flex items-center justify-center">Constructions</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
