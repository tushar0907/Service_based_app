import React from "react";
import "../../App.css";
import axios from "axios";
import {BASE_URL} from "../../base";

const Blog = () => {
  const [featureServices, setFeatureServices] = React.useState([]);
  React.useEffect(() => {
    const getCategory = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/services",
      };
      await axios(config)
        .then((res) => {
          setFeatureServices(res.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getCategory();
  }, []);
  return (
    <div className="flex mb-20 h-auto flex-col w-full justify-center items-center pl-4 pr-4">
      <div className="flex justify-center w-full">
        <div className="flex w-full border-b border-black h-20 font-bold text-[2rem] items-start">
          <p>Featured Services</p>
        </div>
      </div>
      <div className="flex flex-1 mt-5 py-5 mb-6 rounded-lg space-x-6 overflow-x-auto items-center w-full">
        {featureServices.map((item) => (
          <div className="flex-none w-80 justify-center items-center rounded-lg box1 flex-col bg-blue-100">
            <div className="flex geeks p-3 w-full justify-center items-center wrounded-lg">
              <img src={item.image} alt="hello" />
            </div>
            <div className="flex text-xl justify-center items-center mt-2 font-bold">
              {item.name}
            </div>
            <div className="flex text-center p-3 mt-3">
              <p>{item.description.slice(0, 150)}...</p>
            </div>

            <div className="flex items-center mt-3 justify-between px-6">
              <div className="flex text-3xl font-bold p-3">
                ₹{item.service_price}
              </div>
              <div className="flex hover:bg-orange-500 hover:text-white font-bold text-orange-500 border-2 border-orange-500 mb-4 p-2 rounded-md">
                <button className="flex transition duration-300 ease-in-out text-sm py-1 px-2 items-center">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
