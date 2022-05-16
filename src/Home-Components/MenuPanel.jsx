import React from "react";
import logo from "../assets/logo.png";
import {CgProfile} from "react-icons/cg";

const MenuPanel = () => {
  return (
    <div className="flex font-body h-16 border-b drop-shadow-2xl items-center  text-lg font-medium">
      <img
        className="flex pl-5"
        src={logo}
        style={{height: "71%", width: "6%"}}
        alt="logo"
      />
      <ul className="pl-56 flex  space-x-10">
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
