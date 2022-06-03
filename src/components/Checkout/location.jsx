import React from "react";
import {BASE_URL} from "../../base";
import axios from "axios";

const Location = ({setSelectedAddress, selectedAddress}) => {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [state, setState] = React.useState("");
  const [pincode, setPincode] = React.useState("");

  const [allAddresses, setAllAddresses] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const fetch_address = async () => {
      await axios
        .get(BASE_URL + "/rest/address", {
          headers: {Authorization: "Token " + token},
        })
        .then((res) => setAllAddresses(res.data.results));
    };
    fetch_address();
  }, []);

  const saveUser = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      address_1: address1,
      address_2: address2,
      city: city,
      telephone: phone,
      state: state,
      pin_code: pincode,
    });
    const token = localStorage.getItem("token");

    var config = {
      method: "post",
      url: BASE_URL + "/rest/address",
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.warn(name, address1, address2, city, phone, state, pincode);
  };

  return (
    <div className="flex font-worksans flex-col mt-8 w-full">
      <div className="flex font-medium pl-5 text-md p-2">Checkout</div>
      <div className="flex flex-col p-3 flex-1">
        <div className="flex flex-1 font-bold text-lg">Location for Pickup</div>
        {allAddresses.map((address) => (
          <div
            onClick={() => setSelectedAddress(address.id)}
            className={`flex ${
              selectedAddress === address.id
                ? "bg-black text-white"
                : "text-black"
            } cursor-pointer border p-2 border-black my-1 rounded-xl`}>{`${address.name}, ${address.address_1}, ${address.address_2}, ${address.city}, ${address.state}-${address.pin_code}, ${address.telephone}`}</div>
        ))}
        <button
          className="flex my-7 mx-3 border w-60 py-2 font-semibold items-center justify-center rounded-xl bg-[#FCB512]"
          onClick={() => setVisible(!visible)}>
          {visible ? "Proceed" : "Add New Address"}
        </button>
        {visible && (
          <div id="myDIV" className="flex flex-col flex-1 w-7/12">
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="Address Line 1"
              value={address1}
              onChange={(e) => {
                setAddress1(e.target.value);
              }}
            />
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="Address Line 1"
              value={address2}
              onChange={(e) => {
                setAddress2(e.target.value);
              }}
            />
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="State"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <input
              type="text"
              className="flex pl-4 rounded-xl my-3 w-96 h-12 border border-[#FCB512]"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
            <button
              onClick={saveUser}
              className="flex h-12 my-4 mx-3 border font-semibold w-32 items-center justify-center rounded-xl bg-[#FCB512]">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
