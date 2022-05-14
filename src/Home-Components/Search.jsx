import React from "react";
import {FaMapMarkerAlt} from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex p-3">
      <input
        className="flex drop-shadow-2xl ml-16 mt-2 border-black text-sd rounded-3xl h-10 w-80"
        type="text"
        placeholder="Search services & packages"
        name="search"
      />
      <div className="flex ml-auto flex-col items-center mr-2">
        <div className="flex items-center font-bold">
          <FaMapMarkerAlt
            size="20"
            style={{color: "yellow", marginRight: "10px"}}
          />
          Sanjay Gandhi Puram
        </div>
        <div className="flex opacity-40">
          Sanjay Gandi puram, Lucknow Uttar Pradesh 226016
        </div>
      </div>
    </div>
  );
};

export default Search;
