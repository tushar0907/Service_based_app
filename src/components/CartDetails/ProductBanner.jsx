import React from "react";

const CartBanner = ({image, name}) => {
  return (
    <div className="flex flex-1 -mt-16 font-worksans pt-7 flex-col w-3/4 h-3/6">
      <div className="flex mb-10 font-bold p-3 text-4xl">
        <h1>{name}</h1>
      </div>
      <div className="flex flex-1 justify-left items-center">
        <img
          className="h-96 w-4/5 rounded-lg md:rounded-3xl lg:rounded-3xl"
          src={image}
          alt="image"
        />
      </div>
    </div>
  );
};

export default CartBanner;
