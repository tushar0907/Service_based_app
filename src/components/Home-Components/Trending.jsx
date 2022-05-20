import React from "react";

const Trending = () => {
  return (
    <div className="flex font-worksans overflow-x-scroll justify-center mt-10 flex-col h-72">
      <div className="flex text-lg font-bold py-3">Trending Services</div>
      <div className="flex opacity-20 pb-1">Most used Services around you</div>
      <div className="flex flex-1 mt-5">
        <div className="flex flex-1 rounded-lg mr-4 bg-gradient-to-r from-yellow-500 to-yellow-200">
          <div className="flex">
            <img
              src={require("../../assets/person.png")}
              alt="person"
              width="110"
            />
          </div>
          <div className="flex flex-1 pt-3 flex-col">
            <div className="text-left opacity-50">Trending</div>
            <div className="font-bold text-left">BODYGUARD</div>
            <div className="text-left font-medium border-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </div>
          </div>
        </div>
        <div className="flex flex-1 rounded-lg mr-4 bg-gradient-to-r from-yellow-500 to-yellow-200">
          <div className="flex flex-1 rounded-lg mr-4 bg-gradient-to-r from-yellow-500 to-yellow-200">
            <div className="flex">
              <img
                src={require("../../assets/person.png")}
                alt="person"
                width="110"
              />
            </div>
            <div className="flex flex-1 pt-3 flex-col">
              <div className="text-left opacity-50">Trending</div>
              <div className="font-bold text-left">BODYGUARD</div>
              <div className="text-left font-medium border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 rounded-lg mr-4 bg-gradient-to-r from-yellow-500 to-yellow-200">
          <div className="flex flex-1 rounded-lg mr-4 bg-gradient-to-r from-yellow-500 to-yellow-200">
            <div className="flex">
              <img
                src={require("../../assets/person.png")}
                alt="person"
                width="110"
              />
            </div>
            <div className="flex flex-1 pt-3 flex-col">
              <div className="text-left opacity-50">Trending</div>
              <div className="font-bold text-left">BODYGUARD</div>
              <div className="text-left font-medium border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
