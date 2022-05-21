import React from "react";
import LoginArea from "../components/Login/LoginArea";
import TextImage from "../components/Login/TextImage";

const LoginPage = () => {
  return (
    <div className="flex w-3/4 h-full font-worksans flex-col">
      <TextImage />
      <LoginArea />
    </div>
  );
};

export default LoginPage;
