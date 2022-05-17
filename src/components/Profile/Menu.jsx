import React from "react";
import {FiUser} from "react-icons/fi";
import {MdArrowForwardIos} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {FcViewDetails} from "react-icons/fc";
import {FiHelpCircle} from "react-icons/fi";
import {BiExit} from "react-icons/bi";

const Menu = () => {
  return (
    <div className="flex pl-4 pt-5 border-r ml-6 w-1/3 flex-col drop-shadow-2xl">
      <div className="flex justify-center items-start pl-6 h-full flex-col">
        <div className="flex text-xl ">
          Hello,&nbsp;&nbsp;<p className="font-bold">Aryan Negi</p>
        </div>
        <div className="flex text-lg w-80 h-20 items-center justify-start">
          +91&nbsp;&nbsp;<p>9876543210</p>
        </div>
      </div>
      <div>
        <div className="flex h-96 flex-col">
          <div className="flex flex-1 border-black">
            <FiUser size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 font-medium font-worksans text-2xl justify-start items-center">
              Profile
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
          <div className="flex flex-1 border-t border-black">
            <FiSettings size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 font-medium font-worksans text-2xl justify-start items-center">
              Settings
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
          <div className="flex flex-1 border-t border-black">
            <FcViewDetails size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 font-medium font-worksans text-2xl justify-start items-center">
              Terms and Conditions
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
          <div className="flex flex-1 border-t border-b border-black">
            <FiHelpCircle size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 font-medium font-worksans text-2xl justify-start items-center">
              Help
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
        </div>
      </div>
      <div className="flex font-medium justify-start p-20 items-center text-2xl h-60">
        <BiExit />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Menu;
