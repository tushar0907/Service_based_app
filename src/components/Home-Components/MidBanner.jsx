import React from "react";
import axios from "axios";
import {BASE_URL} from "../../base";

const MidBanner = () => {
  const [bannerimg, setBannerimg] = React.useState([]);
  React.useEffect(() => {
    const getImages = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/banner/top",
      };
      await axios(config)
        .then((res) => {
          setBannerimg(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getImages();
  }, []);
  return bannerimg.map((item) => (
    <div className="flex justify-center items-center">
      <div
        className="flex ml-40 p-10 mx-4 flex-col bg-contain bg-no-repeat w-full mt-10 h-96 rounded-lg"
        style={{
          backgroundImage: `url(${item.image}`,
        }}>
        <div className="text-white flex flex-1 text-2xl"></div>
        <div className="text-white flex flex-1 text-left font-bold w-60">
          {}
        </div>
      </div>
    </div>
  ));
};

export default MidBanner;
