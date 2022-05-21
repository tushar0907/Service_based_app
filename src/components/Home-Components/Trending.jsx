import React from "react";
import axios from "axios";
import {BASE_URL} from "../../base";

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
          setTrendingServices(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getTrends();
  }, []);
  return (
    <div className="flex font-worksans p-2 overflow-x-scroll w-full mt-10 flex-col h-3/6">
      <div className="flex text-lg font-bold py-3">Trending Services</div>
      <div className="flex opacity-20 pb-1">Most used Services around you</div>
      <div className="flex flex-1 mt-5">
        {trendingServices.map((item) => (
          <div
            key={item.category + item.sid}
            className="flex-none w-[30rem] h-5/6 mr-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-200">
            <div className="flex flex-1">
              <div className="flex my-2">
                <img
                  className="border mt-1 pl-1 rounded-l-lg"
                  src={item.image}
                  alt="person"
                  width="200"
                />
              </div>
              <div className="flex flex-1 pt-3 flex-col p-3">
                <div className="text-left opacity-50">Trending</div>
                <div className="font-bold text-left">{item.name}</div>
                <div className="text-left font-medium border-b">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
