import React from "react";
import logo from "../../assets/logos8.svg";
import {CgProfile} from "react-icons/cg";
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai";
import {BiCategory} from "react-icons/bi";
import Carrier from "../../assets/memo.png";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex h-full flex-col p-3 bg-[#eecea2] items-center">
      <div className="flex">
        <img className="flex" src={logo} width="100" alt="logo" />
      </div>
      <ul className="flex flex-col flex-1 mt-10">
        <li className=" text-md p-3">
          <Link to="/">
            <AiOutlineHome size="30" />
          </Link>
        </li>
        <li className=" text-md p-3">
          <Link to="/category">
            <BiCategory size="30" />
          </Link>
        </li>
        <li className=" text-md p-3">
          <Link to="/carrier">
            <img src={Carrier} width="30" alt="" />
          </Link>
        </li>
        <li className=" text-md p-3">
          <Link to="/cart">
            <AiOutlineShoppingCart size="30" />
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Link to={"/profile"}>
          <CgProfile className="" size="35" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
