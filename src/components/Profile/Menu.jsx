import React from "react";
import {FiUser} from "react-icons/fi";
import {MdArrowForwardIos} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {FcViewDetails} from "react-icons/fc";
import {FiHelpCircle} from "react-icons/fi";
import {BiExit} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

const Menu = ({name, number}) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="flex pt-5 justify-end w-1/4 flex-col drop-shadow-2xl -mt-10">
      <div className="flex justify-center ml-10 bg-[#f9fafc] items-center pl-6 h-full flex-col">
        <div className="flex text-xl font-bold">
          Hello,&nbsp;&nbsp;
          <p className="font-bold md:text-sm md:mt-1 lg:text-xl lg:mt-0">
            {name}
          </p>
        </div>
        <div className="flex text-lg w-80 h-20 items-center font-medium justify-center">
          <p>{number}</p>
        </div>
      </div>
      <div>
        <div className="flex h-96 ml-10 flex-col bg-[#f1f5f8]">
          <div className="flex cursor-pointer flex-1">
            <FiUser size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 lg:font-medium font-worksans lg:text-2xl justify-start items-center md:text-lg md:font-bold">
              Profile
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
          <div className="flex flex-1 cursor-pointer">
            <FiSettings size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 lg:font-medium font-worksans lg:text-2xl justify-start items-center md:text-lg md:font-bold">
              Settings
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
          <div className="flex flex-1 cursor-pointer">
            <FcViewDetails size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 lg:font-medium font-worksans lg:text-2xl justify-start items-center md:text-lg md:font-bold">
              Terms and Conditions
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
          <div className="flex flex-1 cursor-pointer">
            <FiHelpCircle size="60" className="pl-2 pt-8" />
            <div className="flex flex-1 lg:font-medium font-worksans lg:text-2xl justify-start items-center md:text-lg md:font-bold">
              Help
            </div>
            <MdArrowForwardIos size="60" className="pl-2 pt-8" />
          </div>
        </div>
      </div>
      <div
        onClick={() => logout()}
        className="flex font-medium bg-[#f1f5f8] ml-10 mt-2 justify-start p-20 items-center text-2xl h-96">
        <p className="flex cursor-pointer">
          {" "}
          <BiExit size="30" />
          Logout
        </p>
      </div>
    </div>
  );
};

export default Menu;
