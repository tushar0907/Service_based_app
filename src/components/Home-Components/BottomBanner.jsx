import React from "react";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import {Navigation} from "swiper";

const BottomBanner = () => {
  return (
    <Swiper
      id="bannerr"
      navigation={true}
      modules={[Navigation]}
      className="mySwiper">
      <SwiperSlide>
        <div className="flex justify-center items-center h-auto w-full ">
          <div
            className="bg-center bg-cover bg-no-repeat w-full h-auto rounded-lg"
            style={{}}>
            <img
              id="wide"
              className="lg:flex"
              src={require("../../assets/bannerimg.png")}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BottomBanner;
