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
    <div className="flex drop-shadow-lg p-5 justify-center items-center font-worksans font-medium w-full flex-col">
      <div className="flex font-bold text-4xl justify-center">
        <p>My Cart</p>
      </div>
      <div className="flex items-center justify-center w-full flex-col h-[45rem]">
        {cart.map((item) => (
          <div
            key={item.description + item.category}
            className="flex mt-8 h-full items-center justify-center rounded-xl w-full ml-4 flex-col border flex-1 md:w-96 lg:w-3/5">
            <div className="flex w-full h-full">
              <div className="flex flex-1 w-[50rem] h-[110%] p-6 border-b md:h-32">
                <div className="flex items-center bg-no-repeat h-[121%] w-40 mr-5">
                  <img
                    src={item.image}
                    style={{width: "120px", height: "120px"}}
                  />
                </div>
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
              <div className="flex flex-1 h-full p-4 border w-full rounded-xl items-center md:w-96">
                <input
                  type="text"
                  className="w-[42rem] pl-10 rounded-xl h-full flex"
                  placeholder="Write Instructions"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-1  md:ml-8 rounded-xl mx-4 border lg:w-3/5 mt-10 md:w-96">
        <div className="flex w-full rounded-l-xl border border-[#FCB512]">
          <input
            type="text"
            className="flex w-[200%] h-12 rounded-l-xl p-1"
            placeholder="ENTER PROMO CODE"
          />
        </div>
        <div className="flex cursor-pointer items-center pl-4 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10] rounded-r-xl w-auto md:w-40">
          Apply
        </div>
      </div>
    </div>
  );
};

export default Instructions;
