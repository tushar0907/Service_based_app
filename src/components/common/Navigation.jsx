import React from "react";
import logo from "../../assets/logos8.svg";
import {CgProfile} from "react-icons/cg";
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai";
import {BiCategory} from "react-icons/bi";
import Carrier from "../../assets/memo.png";

const Navigation = () => {
  return (
    <div className="flex h-full flex-col p-3 bg-gray-200 items-center">
      <div className="flex">
        <img className="flex" src={logo} width="100" alt="logo" />
      </div>
      <ul className="flex flex-col flex-1 mt-10">
        <li className=" text-md p-3">
          <a href="home.asp">
            <AiOutlineHome size="30" />
          </a>
        </li>
        <li className=" text-md p-3">
          <a href="category.asp">
            <BiCategory size="30" />
          </a>
        </li>
        <li className=" text-md p-3">
          <a href="carrier.asp">
            <img src={Carrier} width="30" alt="" />
          </a>
        </li>
        <li className=" text-md p-3">
          <a href="cart.asp">
            <AiOutlineShoppingCart size="30" />
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <CgProfile className="" size="35" />
      </div>
    </div>
  );
};

export default Navigation;
