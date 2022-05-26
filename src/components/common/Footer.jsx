import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex p-2 font-worksans mt-24 mb-10 rounded-lg bg-[#222222]">
      <div className="flex flex-1 flex-col justify-center py-20">
        <img
          className="flex ml-5"
          src={logo}
          width="180px"
          height="20px"
          alt="logo"
        />
        <div className="relative ml-auto text-white md:text-sm">
          Vrittih | All Rights reserved| 2021 Copyright
        </div>
      </div>
      <div className="flex flex-1">
        <div className="flex justify-end pt-10 flex-1 text-white text-left p-6 font-bold text-xl">
          <ul>
            <li className="py-3 md:text-sm">Support</li>
            <li className="py-3 md:text-sm">About Us</li>
            <li className="py-3 md:text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-1">
          <div className="flex justify-start pt-10 flex-1 text-white text-left p-6 font-bold text-xl">
            <ul>
              <li className="py-3 md:text-sm">Terms and Conditions</li>
              <li className="py-3 md:text-sm">Return and refund Policy</li>
              <li className="py-3 md:text-sm">Shipping and Delivery Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
