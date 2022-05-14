import React from "react";
import {CgProfile} from "react-icons/cg";

const MenuPanel = () => {
  return (
    <div className="flex h-10 bg-[#FCB512] items-center text-lg font-bold">
      <ul className="pl-20">
        <li className="inline">
          <a href="home.asp">Home</a>
        </li>
        <li className="inline pl-4">
          <a href="category.asp">Category</a>
        </li>
        <li className="inline pl-4">
          <a href="carrier.asp">Carrier</a>
        </li>
        <li className="inline pl-4">
          <a href="cart.asp">Cart</a>
        </li>
      </ul>
      <div className="flex ml-auto pr-10 items-center">
        Profile <CgProfile className="pl-2" size="35" />
      </div>
    </div>
  );
};

export default MenuPanel;
