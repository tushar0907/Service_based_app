import React from "react";
import Information from "../components/Profile/Information";
import Menu from "../components/Profile/Menu";
import axios from "axios";
import {BASE_URL} from "../base";

const Profile = () => {
  const [profile, setProfile] = React.useState({});
  React.useEffect(() => {
    const getInfo = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/auth/details",
      };
      await axios(config)
        .then((res) => {
          setProfile(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getInfo();
  }, []);
  return (
    <div className="flex w-full">
      <Menu name={profile.name} number={profile.ph_number} />
      <Information code={profile.referal_code} />
    </div>
  );
};

export default Profile;
