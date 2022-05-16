import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex h-96 p-2 font-worksans mt-24 bg-[#222222]">
      <div className="flex flex-1 justify-center py-24">
        <img
          className="flex pl-5"
          src={logo}
          style={{height: "60%", width: "20%"}}
          alt="logo"
        />
        <div className="relative mt-56 ml-auto text-white">
          Vrittih | All Rights reserved| 2021 Copyright
        </div>
      </div>
      <div className="flex flex-1">
        <div className="flex justify-end py-32 flex-1 text-white text-left p-6 font-bold text-xl">
          <ul>
            <li className="py-3">Support</li>
            <li className="py-3">About Us</li>
            <li className="py-3">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-1">
          <div className="flex justify-start py-24 flex-1 text-white text-left p-6 font-bold text-xl">
            <ul>
              <li className="py-3">Terms and Conditions</li>
              <li className="py-3">Return and refund Policy</li>
              <li className="py-3">Shipping and Delivery Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
