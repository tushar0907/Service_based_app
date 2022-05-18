import React from "react";
import Top from "../components/VehicleCleaning/Top";
import Body from "../components/VehicleCleaning/Body";

const Vehicle = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Top />
      <Body />
    </div>
  );
};

export default Vehicle;
