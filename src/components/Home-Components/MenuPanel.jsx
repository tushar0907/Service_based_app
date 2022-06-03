import React from "react";
import logo from "../../assets/logo.jpg";
import {Link} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {BASE_URL} from "../../base";
import axios from "axios";

const MenuPanel = () => {
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
    <div className="flex flex-col font-worksans w-full bg-gradient-to-r from-[#fef6ed] to-[#fdd4ee]">
      <div className="flex w-full mt-5 font-worksans border-b drop-shadow-2xl items-center justify-between text-md text[#c1b5bc]">
        <div className="flex mx-16">
          <img className="flex mt-12l" src={logo} width="100" alt="logo" />
        </div>
        <ul className=" font-bold font-worksans  text-xl flex space-x-20">
          <li className="text-md p-3">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className=" text-md p-3">
            <Link to="/category">
              <p>Category</p>
            </Link>
          </li>
          <li className=" text-md p-3">
            <Link to="/carrier">
              <p>Carrier</p>
            </Link>
          </li>
          <li className=" text-md p-3">
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </li>
          <li className="flex ml-auto pr-10 items-center">
            <Link to={"/profile"}>
              <div className="flex">
                {/* <p className="flex text-xl font-bold items-center">Profile </p>{" "} */}
                <CgProfile className="pl-5 flex" size="45" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex h-3/4 justify-center w-full mb-20">
        <div className="flex w-3/6 justify-center">
          {" "}
          <img src={require("../../assets/top.png")} />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex mt-32 font-medium text-8xl my-20">
            <p>
              One-Stop Solution for your{" "}
              <span className="text-orange-600">Services</span>{" "}
            </p>
          </div>
          <div className="flex font-medium mb-10 text-2xl">
            Order any service, anytime from anywhere
          </div>
          <div className="flex w-full justify-start mr-6 mb-12">
            <div className="flex">
              {" "}
              <div className="searchbox flex flex-1 lg:w-[35rem]">
                <input
                  className="flex border p-4 px-6 text-sd rounded-l-xl h-20 w-full"
                  type="text"
                  placeholder="Search here"
                  name="search"
                />
                <button className="flex items-center justify-center bg-orange-600 w-24 h-20 rounded-r-xl">
                  <FiSearch size="24" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex p-2 text-orange-600">Popular: </div>
            {categoryService?.map((item) => (
              <div className="flex mx-2">
                <div className="flex mr-4 h-10 items-center bg-white w-48 justify-center text-gray-400 rounded-lg">
                  <p>{item.name.slice(0, 23)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPanel;
