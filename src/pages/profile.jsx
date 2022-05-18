import React from "react";
import Information from "../components/Profile/Information";
import Menu from "../components/Profile/Menu";

const Profile = () => {
  return (
    <div className="flex w-full">
      <Menu />
      <Information />
    </div>
  );
};

export default Profile;
