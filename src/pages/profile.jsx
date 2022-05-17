import React from "react";
import Information from "../components/Profile/Information";
import Menu from "../components/Profile/Menu";

const profile = () => {
  return (
    <div className="flex">
      <Menu />
      <Information />
    </div>
  );
};

export default profile;
