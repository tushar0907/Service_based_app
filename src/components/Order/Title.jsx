import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col w-3/5 pt-10 font-bold text-lg">
      <div className="flex justify-start">Orders</div>
      <div className="flex justify-end font-normal text-sm">
        <p className="flex">05-Aug</p>
        <p className="flex"> &nbsp;| &nbsp;</p>
        <p className="flex">13:51</p>
      </div>
    </div>
  );
};

export default Title;
