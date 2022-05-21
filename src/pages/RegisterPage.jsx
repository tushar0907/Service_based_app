import React from "react";
import UpperArea from "../components/Register/UpperArea";
import BottomArea from "../components/Register/BottomArea";

const RegisterPage = () => {
  return (
    <div className=" w-3/4 h-full font-worksans flex-col">
      <UpperArea />
      <BottomArea />
    </div>
  );
};

export default RegisterPage;
