import React from "react";
import {FaMapMarkerAlt} from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center p-3">
      <div className="flex flex-1">
        <input
          className="flex border p-4 px-6 mt-2 text-sd rounded-3xl h-10 w-2/4"
          type="text"
          placeholder="Search services & packages"
          name="search"
        />
      </div>
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
