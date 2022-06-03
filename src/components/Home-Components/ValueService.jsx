import React from "react";
import axios from "axios";
import "../../App.css";
import {Link} from "react-router-dom";
import {BASE_URL} from "../../base";

const ValueService = () => {
  const [valueServices, setValueServices] = React.useState([]);
  React.useEffect(() => {
    const getCategory = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/sub_categories",
      };
      await axios(config)
        .then((res) => {
          setValueServices(res.data.results.slice(0, 8));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getCategory();
  }, []);
  return (
    <div className="flex font-worksans h-96 flex-col w-full pl-4 pr-4 mb-20 mt-24">
      <div className="flex w-full justify-center">
        <div className="flex w-full border-b border-black h-20 font-bold text-[2.2rem] items-start">
          <p>Value Added Services</p>
        </div>
      </div>

      <div className="flex flex-1 p-5 pb-7 mb-2 overflow-x-scroll rounded-lg space-x-8 items-center w-full">
        {valueServices.map((item) => (
          <Link to={`/product/${item.sid}`}>
            <div
              key={item.category + item.sid}
              className="arrow flex mt-6 flex-col justify-around w-[14.4rem] h-64 rounded-lg bg-green-50">
              <div className="flex w-32 h-32 ml-auto mr-auto justify-center items-center">
                {" "}
                <img src={item.image} alt="hii" />
              </div>
              <div className="flex text-xl font-bold justify-center">
                {item.name.slice(0, 15)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    /* // <div className="card flex justify-center font-worksans">
    //   <div className="flex flex-col w-full p-8 lg:h-80 md:h-72 md:w-full">
    //     <div className="flex text-lg font-bold p-2">Value Added Services</div>
    //     <div className="flex flex-1 justify-around mt-5 overflow-x-auto">
    //       {valueServices.map((item) => (
    //         <div
    //           key={item.category + item.sid}
    //           className="flex h-auto justify-center p-4 w-full flex-col items-center rounded-lg mr-4 bg-yellow-100">
    //           <img
    //             className="w-32 h-32 rounded-lg"
    //             src={item.image}
    //             alt="guard"
    //           />
    //           <div className="flex pt-2 h-40 items-start justify-center w-full font-medium text-sm text-center">
    //             {item.name.slice(0, 15)}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div> */
  );
};

export default ValueService;
