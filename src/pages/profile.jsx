import React from "react";
import Information from "../components/Profile/Information";
import Menu from "../components/Profile/Menu";
import axios from "axios";
import {BASE_URL} from "../base";
import {useNavigate} from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const getInfo = async () => {
        var config = {
          method: "GET",
          url: BASE_URL + "/auth/details",
          headers: {
            Authorization: "Token " + token,
          },
        };
        await axios(config)
          .then((res) => {
            setProfile(res.data);
          })
          .catch(function (error) {
            localStorage.clear();
            navigate("/login");
          });
      };
      getInfo();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex w-full mt-16">
      <Menu name={profile.name} number={profile.ph_number} />
      <Information code={profile.referal_code} />
    </div>
  );
};

export default Profile;
