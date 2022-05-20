import React from "react";
import ObjectDetail from "../components/PriceInfo/ObjectDetail";
import Customer from "../components/PriceInfo/Customer";

const PriceDetails = () => {
  return (
    <div className="flex flex-col h-full mt-4 font-worksans w-3/4">
      <ObjectDetail />
      <Customer />
    </div>
  );
};

export default PriceDetails;
