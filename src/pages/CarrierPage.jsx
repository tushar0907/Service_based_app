import React from "react";
import Options from "../components/Carrier/Options";
import Form from "../components/Carrier/Form";

const CarrierPage = () => {
  return (
    <div className="flex flex-col w-3/4 h-full">
      <Options />
      <Form />
    </div>
  );
};

export default CarrierPage;
