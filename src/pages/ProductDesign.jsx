import React from "react";
import ProductBanner from "../components/CartDetails/ProductBanner";
import ProductInfo from "../components/CartDetails/ProductInfo";
import ProductOffers from "../components/CartDetails/ProductOffers";
import FAQs from "../components/CartDetails/FAQs";
import Review from "../components/CartDetails/Review";
import axios from "axios";
import {BASE_URL} from "../base";
import {useParams} from "react-router-dom";

const CartPage = () => {
  const [productDetail, setProductDetail] = React.useState({});
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
  return (
    <div className="flex h-full flex-col w-full items-center">
      <ProductBanner name={productDetail.name} image={productDetail.image} />
      <ProductInfo product={productDetail.description} />
      <ProductOffers />
      <Review reviews={productDetail.review_set} />
      <FAQs faqs={productDetail.faq_set} price={productDetail.service_price} />
    </div>
  );
};

export default CartPage;
