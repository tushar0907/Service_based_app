import React from "react";
import logo from "../../assets/logo.png";
import {BsChevronRight} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {MdEmail} from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex w-[103%] -ml-5 h-[30rem] p-2 font-worksans mt-24 mb-10 rounded-lg bg-gradient-to-r from-[#fcf7f4] to-[#eae3ef]">
      <div className="flex h-3/4 w-96 justify-center py-20">
        <img
          className="flex ml-5"
          src={logo}
          width="280px"
          height="26px"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-96 h-96">
        <ul className="flex text-lg flex-col -mb-20 font-medium">
          <li className="flex mb-3">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3 -mt-1">Privacy Policy</p>
          </li>
          <li className="flex">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3 -mt-1">Terms and Conditions</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center w-96 h-[29rem] ml-10">
        <p className="flex mb-12 font-bold text-xl">Category</p>
        <ul className="flex justify-around text-lg flex-col font-medium">
          <li className="flex mb-3">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3 ">Electronics</p>
          </li>
          <li className="flex">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3">Cleaning</p>
          </li>
          <li className="flex mt-3">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3 ">Home Move</p>
          </li>
          <li className="flex mt-3">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3">Painting</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center w-96 h-[27rem] ml-10">
        <p className="flex mb-12 font-bold text-xl">Contact Info</p>
        <ul className="flex justify-around text-lg ml-10 flex-col font-medium">
          <li className="flex mb-3">
            <FaMapMarkerAlt style={{color: "orange"}} />
            <p className="flex ml-3 ">41/1, Sarojni, Delhi</p>
          </li>
          <li className="flex">
            <MdEmail style={{color: "orange"}} />
            <p className="flex ml-3">8732783940</p>
          </li>
          <li className="flex mt-3">
            <MdPhoneIphone style={{color: "orange"}} />
            <p className="flex ml-3 ">example@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
