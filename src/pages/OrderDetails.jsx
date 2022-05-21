import React from "react";
import Records from "../components/Order/Records";
import Title from "../components/Order/Title";

const OrderDetails = () => {
  return (
    <div className="flex items-center flex-col font-worksans h-full w-3/4">
      <Title />
      <Records />
    </div>
  );
};

export default OrderDetails;
