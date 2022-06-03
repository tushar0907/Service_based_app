import React from "react";
import logo from "../../assets/logo.jpg";
import {Link} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {BASE_URL} from "../../base";
import axios from "axios";

const MenuPanel = () => {
  const [categoryService, setCategoryService] = React.useState([]);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
    const getCat = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/categories",
      };
      await axios(config)
        .then((res) => {
          setCategoryService(res.data.results.slice(0, 3));
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
        <ul className=" font-worksans mx-6 text-xl flex flex-1 items-center justify-end space-x-10">
          <li className="text-md px-2">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="text-md px-2">
            <Link to="/category">
              <p>Category</p>
            </Link>
          </li>
          <li className=" text-md px-2">
            <Link to="/carrier">
              <p>Carrier</p>
            </Link>
          </li>
          <li className=" text-md px-2">
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/profile" : "/login"}>
              {/* <p className="flex text-xl font-bold items-center">Profile </p>{" "} */}
              <CgProfile className="pl-5 flex" size="45" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center lg:justify-center w-full lg:flex-row flex-col mb-20">
        <div className="flex flex-[.8] justify-center">
          {" "}
          <img
            className="w-full"
            width="100%"
            src={require("../../assets/top.png")}
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex lg:mt-32 font-bold text-[4.3rem] lg:my-20">
            <p>
              One-Stop Solution <br /> for your{" "}
              <span className="text-orange-600">Services</span>{" "}
            </p>
          </div>
          <div className="flex font-medium mb-10 text-2xl">
            Order any service, anytime from anywhere
          </div>
          <div className="flex w-full justify-start mr-6 mb-12">
            <div className="flex">
              {" "}
              <div className="searchbox flex flex-1 w-full lg:w-[35rem]">
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
          <div className="flex overflow-x-auto">
            <div className="flex p-2 text-orange-600 overflow-x-auto">
              Popular:{" "}
            </div>
            {categoryService?.map((item) => (
              <div className="flex mx-2">
                <div className="flex mr-1 h-10 items-center bg-white px-4 justify-center text-gray-400 rounded-lg">
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
