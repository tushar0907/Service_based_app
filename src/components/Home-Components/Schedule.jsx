import React from "react";
import axios from "axios";
import {BASE_URL} from "../../base";

const Schedule = () => {
  const [scheduleServices, setSheduledServices] = React.useState([]);
  React.useEffect(() => {
    const getCategory = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/sub_categories",
      };
      await axios(config)
        .then((res) => {
          setSheduledServices(res.data.results.slice(0, 5));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getCategory();
  }, []);
  return (
    <div className="flex justify-center font-worksans">
      <div className="flex flex-col w-full p-8 h-80">
        <div className="flex text-lg font-bold p-2">Scheduled Services</div>
        <div className="flex flex-1 justify-around mt-5 overflow-x-auto">
          {scheduleServices.map((item) => (
            <div
              key={item.category + item.sid}
              className="flex h-auto justify-center p-4 w-full flex-col items-center rounded-lg mr-4 bg-yellow-100">
              <div className="flex">
                <img
                  src={item.image}
                  className="w-32 h-32 rounded-lg"
                  alt="guard"
                />
              </div>
              <div className="flex pt-2 h-40 -mt-5 items-start justify-center w-full font-medium text-sm text-center">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
