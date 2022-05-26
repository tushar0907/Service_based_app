import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import {Navigation} from "swiper";
import {BASE_URL} from "../../base";

const MidBanner = () => {
  // const [bannerimg, setBannerimg] = React.useState([]);
  // React.useEffect(() => {
  //   const getImages = async () => {
  //     var config = {
  //       method: "get",
  //       url: BASE_URL + "/rest/banner/top",
  //     };
  //     await axios(config)
  //       .then((res) => {
  //         setBannerimg(res.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };
  //   getImages();
  // }, []);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="flex p-10 flex-col bg-[length:1650px_460px] bg-no-repeat w-full h-96 rounded-lg"
            style={{
              backgroundImage: `url(${require("../../assets/image2.jpg")})`,
            }}>
            <div className="flex font-bold text-xl text-white h-32 backdrop-opacity-5 backdrop-invert w-52">
              <div className="flex w-96 text-bg-yellow-100 flex-col items-start flex-1 font-superbold text-5xl">
                {" "}
                Comprehensive <p>Car Wash</p>{" "}
              </div>
              <div className="flex flex-1 flex-col text-4xl">
                {/* Service at your <p>Doorstep</p> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="flex p-10 flex-col bg-[length:1250px_460px] bg-no-repeat w-full h-96 rounded-lg"
            style={{
              backgroundImage: `url(${require("../../assets/image3.jpg")})`,
            }}>
            <div className="flex flex-col text-4xl font-bold text-white h-32 opacity-50 bg-black">
              Affordable Car <p>Services</p>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div
            className="flex p-10 flex-col bg-[length:1250px_460px] bg-no-repeat w-full h-96 rounded-lg"
            style={{
              backgroundImage: `url(${require("../../assets/image1.jpg")})`,
            }}>
            <div className="flex text-5xl w-96 mt-20 font-bold text-white h-32 backdrop-opacity-5 backdrop-invert">
              Well Trained Security Guards
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
  // <div className="w-full flex bg-red-700 justify-center items-center">
  //   <div
  //     className="flex p-10 flex-col bg-no-repeat w-full h-96 rounded-lg"
  //     style={{
  //       backgroundImage: `url(${item.image}`,
  //     }}>
  //     <div className="text-white flex flex-1 text-2xl"></div>
  //     <div className="text-white flex flex-1 text-left font-bold w-60">
  //       {}
  //     </div>
  //   </div>
  // </div>
};

export default MidBanner;
