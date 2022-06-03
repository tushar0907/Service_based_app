import React from "react";
import {FiSearch} from "react-icons/fi";
// Import Swiper React components
// import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles

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
    <div className="flex h-3/4 justify-center bg-gradient-to-r from-[#fef6ed] to-[#fdd4ee] w-full mb-20">
      <div className="flex w-3/6 justify-center">
        {" "}
        <img src={require("../../assets/top.png")} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex font-bold text-5xl my-20">
          <p>
            One-Stop Solution for your{" "}
            <p className="text-orange-600">Services</p>{" "}
          </p>
        </div>
        <div className="flex font-medium mb-10 text-2xl">
          Order any service, anytime from anywhere
        </div>
        <div className="flex mb-12">
          <div className="flex mr-4 w-44 justify-center h-16 bg-orange-600 rounded-xl">
            <button className="flex font-medium text-white text-xl items-center">
              Select Location
            </button>
          </div>
          <div className="flex">
            {" "}
            <div className="searchbox flex flex-1 lg:w-full">
              <input
                className="flex border p-4 px-6 text-sd rounded-l-xl h-16 w-4/5"
                type="text"
                placeholder="Search here"
                name="search"
              />
              <button className="flex items-center justify-center bg-orange-600 w-24 h-16 rounded-r-xl">
                <FiSearch size="24" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex p-2 text-orange-600">Popular: </div>
          <div className="flex p-2">
            <div className="flex mr-2 bg-white w-32 justify-center text-gray-400 rounded-lg">
              <p>Electronics</p>
            </div>
            <div className="flex mr-2 bg-white w-32 justify-center text-gray-400 rounded-lg">
              <p>Digital Marketing</p>
            </div>
            <div className="flex mr-2 bg-white w-32 justify-center text-gray-400 rounded-lg">
              <p>Painting</p>
            </div>
            <div className="flex bg-white w-32 justify-center text-gray-400 rounded-lg">
              <p>Home Move</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
