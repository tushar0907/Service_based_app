import React from "react";
import {MdContentCopy} from "react-icons/md";
import axios from "axios";
import {BASE_URL} from "../../base";

const Deals = () => {
  const [coupon, setCoupon] = React.useState([]);
  React.useEffect(() => {
    const getDeal = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/coupons",
      };
      await axios(config)
        .then((res) => {
          setCoupon(res.data.slice(0, 3));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getDeal();
  }, []);
  return (
    <div className="flex flex-col justify-around p-8 w-full font-worksans">
      <div className="flex font-bold p-6 text-lg">Coupons</div>
      {coupon.map((item) => (
        <div className="flex my-1 flex-col overflow-y-auto rounded-xl p-6 border-dotted border-2 border-[#FCB512] h-72 w-3/4">
          <div className="flex flex-1">
            <p>Sed ut perspiciatis unde omnis</p>
          </div>
          <div className="flex p-4">
            <p>Offer Valid till -</p>
            <h2 className="font-bold text-md">30 April</h2>
          </div>
          <div className="flex p-4 w-full">
            <div className="flex font-bold text-[#FCB512] flex-1">
              {item.coupon_id}
            </div>
            <div className="flex  justify-end flex-1">
              <MdContentCopy size="20" style={{color: "#FCB512"}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deals;
