import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {BASE_URL} from "../../base";
import "../../App.css";

const Trending = () => {
  const [trendingServices, setTrendingServices] = React.useState([]);
  React.useEffect(() => {
    const getTrends = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/trending",
      };
      await axios(config)
        .then((res) => {
          setTrendingServices(res.data.slice(0, 4));
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
            <p>Trending Services</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex overflow-x-scroll flex-1 space-x-6 justify-center p-5 pb-7 mb-2 rounded-lg items-center">
            {trendingServices.map((item) => (
              <div
                key={item.category + item.sid}
                className="flex box1 mt-6 w-[23rem] h-[30rem] flex-col rounded-xl bg-blue-100">
                <div className="flex h-40 pt-2 justify-center items-center wrounded-lg">
                  <img
                    className="w-40 mt-7 h-40 rounded-lg"
                    src={item.image}
                    alt="hello"
                  />
                </div>
                <div className="flex text-xl justify-center items-center mt-2 font-bold">
                  {item.name}
                </div>
                <div className="flex justify-center p-3 pl-4 mt-3 text-center items-center">
                  {item.description.slice(0, 120)}...
                </div>
                <div className="flex items-center mt-auto mb-auto">
                  <div className="flex text-2xl ml-auto justify-end font-bold p-3">
                    ₹ {item.service_price}
                  </div>
                  <div className="flex hover:bg-orange-500 hover:text-white font-bold items-center justify-center text-orange-600 border-4 border-orange-600 w-40 h-16 mb-4 p-3 ml-auto mr-auto rounded-xl">
                    <Link to={`/product/${item.sid}`}>
                      <button className="font-bold text-lg">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div className="boxx flex font-worksans p-2 overflow-x-scroll w-full mt-10 flex-col h-3/6">
    //   <div className="flex text-lg font-bold py-3">Trending Services</div>
    //   <div className="flex opacity-20 pb-1">Most used Services around you</div>
    //   <div className="flex flex-1 mt-5">
    //     {trendingServices.map((item) => (
    //       <div className="card flex justify-center font-worksans">
    //         <div className="flex flex-col lg:w-60 lg:h-60 md:w-40 md:h-40">
    //           <div className="flex flex-1 justify-around mt-5">
    //             <div
    //               key={item.category + item.sid}
    //               className="flex h-auto justify-center  w-full flex-col items-center rounded-lg mr-4 bg-yellow-100">
    //               <img
    //                 className="w-32 mt-7 h-32 rounded-lg"
    //                 src={item.image}
    //                 alt="guard"
    //               />
    //               <div className="flex font-bold pt-2 h-20 items-start justify-center w-full text-sm text-center">
    //                 {item.name}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Trending;
