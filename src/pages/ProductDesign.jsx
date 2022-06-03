import React from "react";
import ProductBanner from "../components/CartDetails/ProductBanner";
import ProductInfo from "../components/CartDetails/ProductInfo";
import ProductOffers from "../components/CartDetails/ProductOffers";
import FAQs from "../components/CartDetails/FAQs";
import Review from "../components/CartDetails/Review";
import axios from "axios";
import {BASE_URL} from "../base";
import {useParams} from "react-router-dom";
import {useSnackbar} from "notistack";

const CartPage = () => {
  const [productDetail, setProductDetail] = React.useState({});
  const {enqueueSnackbar} = useSnackbar();
  const params = useParams();
  React.useEffect(() => {
    const getDetail = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/service/" + params.sid,
      };
      await axios(config)
        .then((res) => {
          setProductDetail(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getDetail();
  }, []);

  const addToCart = async () => {
    const token = localStorage.getItem("token");
    await axios
      .post(
        BASE_URL + "/rest/cart?sid=" + params.sid,
        {},
        {headers: {Authorization: "Token " + token}}
      )
      .then((res) => {
        if (res.data.success) {
          enqueueSnackbar("Added To Cart", {variant: "success"});
        } else {
          enqueueSnackbar("Already exists in your cart", {variant: "error"});
        }
      });
  };

  return (
    <div className="flex h-full flex-col w-full items-center mt-20">
      <ProductBanner name={productDetail.name} image={productDetail.image} />
      <ProductInfo product={productDetail.description} />
      <ProductOffers />
      <Review reviews={productDetail.review_set} />
      <FAQs faqs={productDetail.faq_set} price={productDetail.service_price} />
      <button
        onClick={addToCart}
        className="flex font-medium flex-1 mb-3 mx-16 w-96 -mt-16 p-4 rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        <div className="flex justify-center items-end flex-1">
          <p> ₹ {productDetail.service_price}</p>
        </div>
        <button className="flex items-center font-bold flex-1">
          <p>Book Now</p>
        </button>
      </button>
    </div>
  );
};

export default CartPage;
