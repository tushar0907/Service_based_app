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
    <div className="boxx flex font-worksans p-2 overflow-x-scroll w-full mt-10 flex-col h-3/6">
      <div className="flex text-lg font-bold py-3">Trending Services</div>
      <div className="flex opacity-20 pb-1">Most used Services around you</div>
      <div className="flex flex-1 mt-5">
        {trendingServices.map((item) => (
          <div className="card flex justify-center font-worksans">
            <div className="flex flex-col lg:w-60 lg:h-60 md:w-40 md:h-40">
              <div className="flex flex-1 justify-around mt-5">
                <div
                  key={item.category + item.sid}
                  className="flex h-auto justify-center  w-full flex-col items-center rounded-lg mr-4 bg-yellow-100">
                  <img
                    className="w-32 mt-7 h-32 rounded-lg"
                    src={item.image}
                    alt="guard"
                  />
                  <div className="flex font-bold pt-2 h-20 items-start justify-center w-full text-sm text-center">
                    {item.name}
                  </div>
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
