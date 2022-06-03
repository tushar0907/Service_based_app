import React from "react";
import {AiOutlineLeft} from "react-icons/ai";
import {useParams, useNavigate} from "react-router-dom";

const TextImage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mt-16 items-center flex-col w-full">
      <div className="flex flex-col">
        <h1 className="flex justify-center font-bold p-2 text-4xl text-[#FCB512]">
          <AiOutlineLeft onClick={() => navigate("/")} className="mr-3" /> LOGIN
          NOW
        </h1>
        <p className="flex pl-5 pb-10 text-lg font-medium p-2">
          We will send OTP to your phone number
        </p>
      </div>
      <div className="flex">
        <img className="h-80" src={require("../../assets/art.png")} />
      </div>
    </div>
  );
};

export default TextImage;
