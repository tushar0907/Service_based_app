import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addItemInCart} from "../../context/cart";
import {useSnackbar} from "notistack";

const Body = (props) => {
  const {enqueueSnackbar} = useSnackbar();
  // const state = useSelector()
  const dispatch = useDispatch();

  return props.products.map((product) => (
    <div
      key={product.image}
      className="flex border my-2 font-worksans font-medium p-10 bg-contain bg-right bg-no-repeat flex-col h-80 w-4/5 lg:w-7/12 rounded-3xl"
      style={{
        backgroundImage: `url(${product.image})}`,
      }}>
      <div className="flex flex-1 text-xl font-bold">{product.name}</div>
      <div className="flex flex-1 w-80">
        <p>{product.description}</p>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col items-start font-bold text-lg justify-center mr-5">
          <p>₹ {product.service_price}</p>
        </div>
        <button
          onClick={() => {
            dispatch(addItemInCart(product));
            enqueueSnackbar("Item added to cart");
          }}
          className="flex cursor-pointer flex-1 justify-center items-center font-bold rounded-2xl bg-gradient-to-r from-[#FFD36F] p-3 to-[#F1Ad10]">
          Add to Cart
        </button>
      </div>
    </div>
  ));
};

export default Body;
