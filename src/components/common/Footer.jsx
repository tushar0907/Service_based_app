import React from "react";
import logo from "../../assets/logo.png";
import {BsChevronRight} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {MdEmail} from "react-icons/md";
import {BASE_URL} from "../../base";
import axios from "axios";

const Footer = () => {
  const [categoryService, setCategoryService] = React.useState([]);
  React.useEffect(() => {
    const getCat = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/categories",
      };
      await axios(config)
        .then((res) => {
          setCategoryService(res.data.results.slice(0, 4));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getCat();
  }, []);
  return (
    <div className="flex w-full flex-col py-10 lg:py-40 lg:flex-row p-2 font-worksans mt-24 rounded-lg bg-gradient-to-r from-[#fcf7f4] to-[#eae3ef]">
      <div className="flex h-full items-center ">
        <img
          className="flex ml-5"
          src={logo}
          width="200px"
          height="26px"
          alt="logo"
        />
      </div>
      <div className="flex flex-col flex-1 lg:items-center ">
        <ul className="flex text-lg flex-col lg:-mb-20 font-medium">
          <li className="flex mb-3">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3 -mt-1">Privacy Policy</p>
          </li>
          <li className="flex">
            <BsChevronRight style={{color: "orange"}} />
            <p className="flex ml-3 -mt-1">Terms and Conditions</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col flex-1 lg:items-center ml-10">
        <p className="flex mt-12 lg:mt-0 lg:mb-5 ml-3 mb-3 w-full font-bold text-xl">
          Category
        </p>
        <ul className="flex justify-around text-lg flex-col font-medium">
          {categoryService.map((item) => (
            <li className="flex mb-3">
              <BsChevronRight style={{color: "orange"}} />
              <p className="flex ml-3 ">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col flex-1 lg:items-center ml-10">
        <p className="flex mb-6 font-bold text-xl ml-3">Contact Info</p>
        <ul className="flex justify-around text-lg flex-col font-medium">
          <li className="flex mb-3">
            <FaMapMarkerAlt style={{color: "orange"}} />
            <p className="flex ml-3 ">41/1, Sarojni, Delhi</p>
          </li>
          <li className="flex">
            <MdEmail style={{color: "orange"}} />
            <p className="flex ml-3">8732783940</p>
          </li>
          <li className="flex mt-3">
            <MdPhoneIphone style={{color: "orange"}} />
            <p className="flex ml-3 ">example@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
