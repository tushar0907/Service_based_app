import React from "react";
import Location from "../components/Checkout/location";
import moment from "moment";
import axios from "axios";
import { BASE_URL } from "../base";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";

const Checkout = () => {
  const [currentDate, setCurrentDate] = React.useState([]);
  const Razorpay = useRazorpay();
  const [timeSlots, setTimeSlots] = React.useState([
    { name: "10 AM - 11 AM", startTime: "00:10:00", endTime: "00:11:00" },
    { name: "11 AM - 12 PM", startTime: "00:11:00", endTime: "00:12:00" },
    { name: "12 PM - 01 PM", startTime: "00:12:00", endTime: "00:13:00" },
    { name: "01 PM - 02 PM", startTime: "00:13:00", endTime: "00:14:00" },
    { name: "02 PM - 03 PM", startTime: "00:14:00", endTime: "00:15:00" },
  ]);
  const [seletedDate, setSeletedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [paymentMode, setPaymentMode] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [items, setItem] = React.useState([]);
  const [selectedAddress, setSelectedAddress] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  React.useEffect(() => {
    for (let i = 0; i < 7; i++) {
      if (currentDate.length < 7) {
        let next_date = moment().add(i, "days");
        console.log(next_date);
        currentDate.push(next_date);
        setCurrentDate(currentDate);
      }
    }
  }, []);
  // console.log(moment().hour());
  React.useEffect(() => {
    const date = seletedDate;
    // for (let i = 0; i < arguments.length; i++) {}
    console.log(moment().isSame(date));
    if (moment().isSame(date, "date")) {
      let hours = moment().hour();
      let nexthours = moment(date).add(hours + 1, "hour");
      console.log(nexthours);
    }
  }, [currentDate]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios
      .get(BASE_URL + "/rest/cart", {
        headers: { Authorization: "Token " + token },
      })
      .then((res) => {
        if (res.data.success) {
          let total_price = 0;
          setItem(res.data.cart_products);
          for (let i of res.data.cart_products) {
            total_price += i.service_price;
          }
          setTotal(total_price);
        }
      });
  }, []);

  const getConfigForOrder = (
    razorpay_payment_id = null,
    razorpay_order_id = null,
    razorpay_signature = null
  ) => {
    let services = [];
    for (let item of items) {
      services.push({
        sid: item.sid,
        start_time: selectedTime.startTime,
        end_time: selectedTime.endTime,
        service_date: moment(seletedDate).format("YYYY-MM-DD"),
        instruction: "",
      });
    }
    let order_data = {
      address: selectedAddress,
      payment_method: paymentMode,
      discount: 0,
      redeemed_points: 0,
      rz_payment_id: paymentMode !== "cod" ? razorpay_payment_id : null,
      rz_order_id: paymentMode !== "cod" ? razorpay_order_id : null,
      rz_signature: paymentMode !== "cod" ? razorpay_signature : null,
      wallet_balance_use: 0,
      coupon_id: "null or id",
      services: services,
    };

    return order_data;
  };

  const checkOut = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    await axios
      .post(BASE_URL + "/rest/order", data, {
        headers: { Authorization: "Token " + token },
      })
      .then((res) => {
        if (res.data.success) {
          enqueueSnackbar("Order Placed", { variant: "success" });
          navigate("/");
        }
      })
      .catch((e) =>
        enqueueSnackbar("Something went wrong", { variant: "error" })
      );
  };

  const checkOutOnline = async () => {
    await axios
      .get(BASE_URL + "/rest/order_id", { params: { amount: total } })
      .then((res) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const options = {
          key: "rzp_live_NOZMOhOyFOc5cy", // Enter the Key ID generated from the Dashboard
          amount: total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "S8",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
            let data = getConfigForOrder(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
            checkOut(data);
          },
          prefill: {
            name: user.name,
            contact: user.phone,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      });
  };

  return (
    <div className="flex h-full w-3/4 flex-col">
      <Location
        setSelectedAddress={setSelectedAddress}
        selectedAddress={selectedAddress}
      />
      <div className="flex font-worksans w-full h-2/4 flex-col my-12">
        <div className="flex w-full flex-col h-32">
          <div className="flex font-semibold pl-1 text-lg">
            <h1>Select your preferred Date &amp; Time</h1>
          </div>
          <div className="flex pt-3 overflow-x-scroll">
            {currentDate.map((date) => (
              <div
                key={date.toISOString()}
                onClick={() => setSeletedDate(date)}
                className={`flex p-2 font-bold cursor-pointer flex-1`}
              >
                <div
                  className={`flex ${
                    seletedDate === date && "bg-[#FCB512]"
                  } items-center flex-col border-2 border-[#FCB512] hover:bg-[#FCB512] rounded-xl h-20 w-20`}
                >
                  <div className="flex items-end flex-1">
                    <p>{moment(date, "DD-MM-YYYY").date()}</p>
                  </div>
                  <div className="flex flex-1">
                    <p>{moment(date).format("ddd")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {seletedDate && (
          <div className="flex flex-1 flex-col my-16 w-3/5">
            <div className="flex font-bold pl-3 text-sd">Pick Time Slot</div>
            <div className="flex my-5 flex-1">
              <div className="flex flex-col flex-1">
                {timeSlots.map((time) => (
                  <div
                    onClick={() =>
                      setSelectedTime({
                        startTime: time.startTime,
                        endTime: time.endTime,
                      })
                    }
                    className={`flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium ${
                      selectedTime?.startTime === time.startTime
                        ? "bg-[#FCB512] text-white"
                        : "text-[#FCB512] border-[#FCB512]"
                    } rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black`}
                  >
                    <p>{time.name}</p>
                  </div>
                ))}
              </div>
              {/* <div className="flex flex-1">
                <div className="flex justify-around flex-col flex-1">
                  <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                    <p>10 AM - 11 AM</p>
                  </div>
                  <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                    <p>12 AM - 1 PM</p>
                  </div>
                  <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                    <p>3 PM - 4 PM</p>
                  </div>
                  <div className="flex w-56 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                    <p>5 PM - 6 PM</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>

      {/* Payment */}

      <div className="flex mt-28 w-3/5 flex-col ">
        <div className="flex pl-4 font-bold text-lg">
          <p>Select a Payment Method</p>
        </div>
        <div className="flex flex-col p-6 flex-1">
          <div className="flex flex-1 pt-8">
            {" "}
            <div className="flex flex-1 text-md items-center h-10 border-b border-[#FCB512]">
              <input
                onChange={() => setPaymentMode("online")}
                type="radio"
                name="payment"
              />
              &nbsp;&nbsp;
              <p className="flex cursor-pointer items-start">Pay Online</p>
            </div>
          </div>
          <div className="flex flex-1 pt-8 items-center">
            {" "}
            <div className="flex flex-1 items-center text-md h-10 border-b border-[#FCB512]">
              <input
                onChange={() => setPaymentMode("cod")}
                type="radio"
                name="payment"
                classname="flex items-end"
              />
              &nbsp;&nbsp;
              <p className="flex cursor-pointer items-start">
                Pay After Service
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-30 pl-4 p-10 flex-col">
          <div className="flex border-t border-[#FCB512] flex-1 p-4 font-medium text-md">
            <div className="flex flex-1">
              <p>You Pay</p>
            </div>
            <div className="flex flex-1 justify-end">
              <p>₹ {total}</p>
            </div>
          </div>
          <div className="flex h-16 w-full rounded-xl bg-gradient-to-r from-[#FFD36F] p-3 to-[#F1Ad10]">
            <div className="flex flex-1 flex-col items-start font-bold text-lg justify-center mr-5">
              <p>₹ {total}</p>
            </div>
            <button
              onClick={() =>
                paymentMode !== "cod"
                  ? checkOutOnline()
                  : checkOut(getConfigForOrder())
              }
              className="flex cursor-pointer flex-1 justify-end items-center font-bold rounded-2xl"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
