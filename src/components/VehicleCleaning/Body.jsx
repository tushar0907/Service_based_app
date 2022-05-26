import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addItemInCart} from "../../context/cart";
import {useSnackbar} from "notistack";
import {Link} from "react-router-dom";

const Body = (props) => {
  const {enqueueSnackbar} = useSnackbar();
  // const state = useSelector()
  const dispatch = useDispatch();

  return props.products.map((product) => (
    <div
      key={product.image}
      className={`flex border my-2 font-worksans font-medium p-10 bg-cover bg-right bg-no-repeat h-96 w-4/5 lg:p-4 lg:w-9/12 rounded-3xl lg:drop-shadow-2xl lg:border lg:border-[#d9c7c7] md:drop-shadow-2xl md:border md:border-[#d9c7c7] md:w-5/6`}
      style={{}}>
      <Link to={`/product/${product.sid}`}>
        <div className="flex flex-1 flex-col ">
          <div className="flex flex-1 text-xl font-bold lg:mt-3 lg:pl-2">
            {product.name}
          </div>
          <div className="flex flex-1 w-80 lg:mt-1 lg:pl-3">
            <p>{product.description.slice(0, 400)}...</p>
          </div>
          <div className="flex flex-col items-start font-bold text-lg justify-center mr-5 lg:ml-10 lg:mt-3">
            <p>₹ {product.service_price}</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 justify-center items-start flex-col">
        <div className="flex flex-1 lg:mt-5 lg:items-start lg:justify-center lg:w-full xl:-mt-2 2xl:-mt-2">
          <img
            className="lg:h-60  lg:flex lg:mt-5  lg:w-96 xl:w-3/6 xl:h-72 md:w-80 md:h-52 md:my-6 2xl:w-3/5"
            src={product.image}
          />
        </div>
        <div className="flex justify-start ml-auto mr-auto md:w-52 md:mt-2  lg:-mt-20 xl:w-96 xl:mx-44 2xl:mx-72 xl:my-1">
          <button
            onClick={() => {
              dispatch(addItemInCart(product));
              enqueueSnackbar("Item added to cart");
            }}
            className="flex  cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-gradient-to-r from-[#FFD36F] p-3 to-[#F1Ad10]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Body;
