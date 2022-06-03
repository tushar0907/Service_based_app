import React from "react";
import {MdArrowForwardIos} from "react-icons/md";
import memo from "../../assets/memo.png";
import coupon from "../../assets/coupon.png";
import wallet from "../../assets/wallet.png";
import {Link} from "react-router-dom";

const Information = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 font-medium text-lg justify-around pl-10 ml-12  items-center w-10/12 border-b border-black">
        <Link to={"/orderdetails"}>
          <div className="flex bg-[#FCB512] h-32 items-center justify-center w-32 rounded-full">
            <img src={memo} style={{height: "30%", width: "30%"}} alt="guard" />
          </div>
          <p className="flex items-center justify-center">Orders</p>
        </Link>

        <div className="flex">
          <Link to={"/balance"}>
            <div>
              <div className="flex cursor-pointer bg-[#FCB512] h-32 items-center justify-center w-32 rounded-full">
                <img
                  src={wallet}
                  style={{height: "30%", width: "30%"}}
                  alt="guard"
                />
              </div>
              <p className="flex items-center justify-center">Wallet</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to={"/coupon"}>
            <div className="flex bg-[#FCB512] h-32 items-center justify-center w-32 rounded-full">
              <img
                src={coupon}
                style={{height: "30%", width: "30%"}}
                alt="guard"
              />
            </div>
            <p className="flex items-center justify-center">Coupons</p>
          </Link>
        </div>
      </div>
      <Link to={"/refer"}>
        <div className="flex flex-1 justify-center">
          <div className="flex w-7/12 mt-24 bg-yellow-100 rounded-xl h-24 items-center">
            <div className="flex bg-[#FCB512] text-4xl font-bold h-20 items-center justify-center w-20  rounded-full">
              ₹
            </div>

            <div className="flex pl-7 flex-col font-medium lg:text-2xl md:text-md md:font-bold">
              <p>Refer & Earn</p>
              <p>₹ 462</p>
            </div>

            <div className="flex flex-1 justify-end mb-auto">
              {" "}
              <MdArrowForwardIos size="60" className="pl-2 pt-8" />
            </div>
          </div>
        </div>{" "}
      </Link>
      <div className="flex flex-1"></div>
    </div>
  );
};

export default Information;
