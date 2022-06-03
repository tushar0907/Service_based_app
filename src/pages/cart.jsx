import React from "react";
import Instructions from "../components/MyCart/Instructions";
import Bill from "../components/MyCart/Bill";
import axios from "axios";
import {BASE_URL} from "../base";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetch_from_cart = async () => {
      await axios
        .get(BASE_URL + "/rest/cart", {
          headers: {Authorization: "Token " + token},
        })
        .then((res) => {
          if (res.data.success) {
            setCart(res.data.cart_products);
            let total_price = 0;
            for (let i of res.data.cart_products) {
              total_price += i.service_price;
            }
            setTotal(total_price);
          }
        });
    };
    fetch_from_cart();
  }, []);
  return (
    <div className="flex flex-col mt-12 h-full w-3/4">
      <Instructions cart={cart} />
      <Bill cart={cart} total={total} />
    </div>
  );
};

export default Cart;
