import React from "react";
import axios from "axios";
import {BASE_URL} from "../../base";
import {Link} from "react-router-dom";
import "../../App.css";

const Schedule = () => {
  const [trendingServices, setTrendingServices] = React.useState([]);
  React.useEffect(() => {
    const getTrends = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/trending",
      };
      await axios(config)
        .then((res) => {
          setTrendingServices(res.data.reverse());
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getTrends();
  }, []);
  return (
    <div className="flex w-full justify-center">
      <div className="flex h-auto flex-col w-full justify-start mb-20 pl-4 pr-4 my-16">
        <div className="flex w-full justify-center">
          {" "}
          <div className="flex w-full border-b border-black h-20 font-bold text-4xl items-start">
            <p>Services</p>
          </div>
        </div>
        <div className="flex w-full justify-center overflow-x-auto">
          <div className="flex flex-1 overflow-x-auto space-x-6 py-5 pb-7 mb-2 rounded-lg items-center">
            {trendingServices.map((item) => (
              <div
                key={item.category + item.sid}
                className="flex-none box1 mt-6 w-80 flex-col rounded-xl bg-blue-100">
                <div className="flex h-40 pt-2 justify-center items-center rounded-xl overflow-hidden">
                  <img
                    className="w-40 mt-7 h-40 rounded-xl"
                    src={item.image}
                    alt="hello"
                  />
                </div>
                <span className="flex truncate px-6 text-xl justify-center text-center w-full font-bold">
                  {item.name.length > 20 ? item.name.slice(0, 20) : item.name}
                </span>
                <div className="flex justify-center p-3 pl-4 mt-3 text-center items-center">
                  {item.description.slice(0, 120)}...
                </div>
                <div className="flex items-center mt-3 justify-between px-6">
                  <div className="flex text-3xl font-bold p-3">
                    ₹{item.service_price}
                  </div>
                  <div className="flex hover:bg-orange-500 hover:text-white font-bold text-orange-500 border-2 border-orange-500 mb-4 p-2 rounded-md">
                    <button className="flex transition duration-300 ease-in-out text-sm py-1 px-2 items-center">
                      <Link to={`/product/${item.sid}`}>
                        <button className="font-bold text-lg">
                          Learn More
                        </button>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div className="flex justify-center font-worksans">
    //   <div className="flex flex-col w-full p-8 h-80">
    //     <div className="flex text-lg font-bold p-2">Scheduled Services</div>
    //     <div className="flex text-3xl my-20"> No Services Yet</div>
    //     {/* <div className="flex flex-1 justify-around mt-5 overflow-x-auto">
    //       {scheduleServices.map((item) => (
    //         <div
    //           key={item.category + item.sid}
    //           className="flex h-auto justify-center p-4 w-full flex-col items-center rounded-lg mr-4 bg-yellow-100">
    //           <div className="flex">
    //             <img
    //               src={item.image}
    //               className="w-32 h-32 rounded-lg"
    //               alt="guard"
    //             />
    //           </div>
    //           <div className="flex pt-2 h-40 -mt-5 items-start justify-center w-full font-medium text-sm text-center">
    //             {item.name}
    //           </div>
    //         </div>
    //       ))}
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default Schedule;
