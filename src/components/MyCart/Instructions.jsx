import axios from "axios";
import React from "react";
import {AiFillCloseCircle} from "react-icons/ai";
import {BASE_URL} from "../../base";
// import {BASE_URL} from "../../base";
import {useSnackbar} from "notistack";

const Instructions = ({cart}) => {
  const {enqueueSnackbar} = useSnackbar();
  const remove_from_cart = async (sid) => {
    const token = localStorage.getItem("token");
    await axios
      .delete(BASE_URL + "/rest/cart?sid=" + sid, {
        headers: {Authorization: "Token " + token},
      })
      .then((res) => {
        if (res.data.success) {
          enqueueSnackbar("Removed from cart", {variant: "error"});
        } else {
          enqueueSnackbar("Something went wrong", {variant: "error"});
        }
      });
  };
  return (
    <div className="flex drop-shadow-lg p-5 font-worksans font-medium w-full flex-col">
      <div className="flex font-bold text-lg">
        <p>My Cart</p>
      </div>
      {cart.map((item) => (
        <div
          key={item.description + item.category}
          className="flex mt-8 rounded-xl w-2/4 ml-4 flex-col border flex-1 lg:w-3/5">
          <div className="flex p-6 border-b">
            <div
              className="flex bg-no-repeat w-20 mr-5"
              style={{
                backgroundImage: `url(${item.image}`,
              }}></div>
            <div className="flex flex-1 font-bold flex-col">
              <p>{item.name}</p>
              <p>₹ {item.service_price}</p>
            </div>
            <div
              onClick={() => remove_from_cart(item.sid)}
              className="flex  cursor-pointer">
              <AiFillCloseCircle size="30" />
            </div>
          </div>
          <div className="flex h-24 p-4 items-center">
            <input
              className="flex rounded-xl p-4 bg-[#EEEEEE] h-20 flex-1"
              type="text"
              placeholder="Add Instructions"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-1  md:ml-12 rounded-xl mx-4 border w-1/2 mt-10 border-[#FCB512]">
        <div className="flex flex-1">
          <input
            type="text"
            className="flex w-full h-12 rounded-l-xl p-1"
            placeholder="ENTER PROMO CODE"
          />
        </div>
        <div className="flex cursor-pointer items-center pl-4 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10] rounded-r-xl w-24">
          Apply
        </div>
      </div>
    </div>
  );
};

export default Instructions;
