import React from "react";
import {BASE_URL} from "../base";
import axios from "axios";
import {useSnackbar} from "notistack";

const CarrierPage = () => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [annual, setAnnual] = React.useState("");
  const [pan, setPan] = React.useState("");
  const [carrier, setCarrier] = React.useState(null);
  const [subCategory, setSubCategory] = React.useState([]);
  const [next, setNext] = React.useState(null);
  const {enqueueSnackbar} = useSnackbar();
  const [isLoading, setIsLoading] = React.useState(false);

  const saveUser = () => {
    setIsLoading(true);
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      ph_number: "+91" + number,
      email: email,
      pin_code: pincode,
      occupation: occupation,
      annual_income: annual,
      pan_number: pan,
      sub_category: 8,
    });

    console.log(data);

    var config = {
      method: "post",
      url: BASE_URL + "/rest/apply",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        enqueueSnackbar("Successfully applied!", {variant: "success"});
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar("Something went wrong!", {variant: "error"});
      })
      .finally(() => setIsLoading(false));
  };

  const validateData = () => {
    if (number.length !== 10) {
      return enqueueSnackbar("Phone number is invalid", {variant: "error"});
    }
    if (!name)
      return enqueueSnackbar("something went wrong", {variant: "error"});
    if (!pan)
      return enqueueSnackbar("something went wrong", {variant: "error"});
    if (!pincode)
      return enqueueSnackbar("something went wrong", {variant: "error"});
    if (!occupation)
      return enqueueSnackbar("something went wrong", {variant: "error"});
    if (!annual)
      return enqueueSnackbar("something went wrong", {variant: "error"});
    if (!email)
      return enqueueSnackbar("something went wrong", {variant: "error"});

    saveUser();
  };

  React.useEffect(() => {
    setIsLoading(true);
    const getType = async () => {
      var config = {
        method: "get",
        url: BASE_URL + "/rest/sub_categories",
      };
      await axios(config)
        .then((res) => {
          setSubCategory(res.data.results);
          setNext(res.data.next);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    };
    getType();
  }, []);

  return isLoading ? (
    <div class="flex items-center justify-center ">
      <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  ) : (
    <div className="flex flex-col w-3/4 h-full">
      <div className="flex flex-1 border-b-2 border-[#FCB512] flex-col my-10 w-full">
        <div className="flex font-bold p-4 pl-5 text-md">Carrier</div>
        <div className="flex overflow-x-auto ">
          {subCategory.map((item) => (
            <div
              key={item.category + item.sid}
              onClick={() => setCarrier(item.scid)}
              className="flex-none h-52 w-44 p-6 mr-2 ">
              <div className="flex flex-col justify-center items-center ">
                <div className="flex h-52 flex-col">
                  <div
                    className={`flex ${
                      carrier === item.scid ? "bg-gray-300" : "bg-white"
                    } mx-5 w-32 items-center justify-center rounded-xl h-32 border-2 border-[#FCB512] hover:bg-[#FCB512]`}>
                    <img style={{height: "90px"}} src={item.image} />
                  </div>
                  <p className="flex items-center text-center justify-center">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {carrier ? (
        <div className="flex flex-col font-worksans p-5 w-full">
          <div className="flex font-medium text-md pb-6">Basic Details*</div>
          <div className="flex h-44 justify-around flex-col">
            <input
              type="text"
              className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
              placeholder="Customer Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
              placeholder="Mobile Number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </div>
          <div className="flex my-7 flex-col flex-1">
            <div className="flex text-md pv-6">
              <p className="font-medium">More Details</p>
              <p>(Optional)</p>
            </div>
            <div className="flex h-72 justify-around flex-col">
              <input
                type="text"
                className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
                placeholder="Pincode"
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
              />
              <div className="flex w-3/4 h-12">
                {" "}
                <input
                  type="text"
                  className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-4/5"
                  placeholder="Occupations"
                  onChange={(e) => setOccupation(e.target.value)}
                  value={occupation}
                />
              </div>
              <input
                type="text"
                className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
                placeholder="Annual Income"
                onChange={(e) => setAnnual(e.target.value)}
                value={annual}
              />
              <input
                type="text"
                className="flex pl-5 bg-[#F0F0F0] rounded-xl h-12 w-3/5"
                placeholder="PAN Number"
                onChange={(e) => setPan(e.target.value)}
                value={pan}
              />
            </div>
          </div>
          <button
            onClick={validateData}
            className="flex font-medium w-72 items-center justify-center  rounded-xl h-10 bg-[#FCB512]">
            Apply
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CarrierPage;
