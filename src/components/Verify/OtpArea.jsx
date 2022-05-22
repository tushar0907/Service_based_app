import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../base";
import { setOtp } from "../../context/login";

const OtpArea = () => {
  const { result, otp, ph_number } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const ValidateOtp = () => {
    console.log(result, otp);
    if (otp === null || result === null) return;
    result
      .confirm(otp)
      .then(async (result) => {
        console.log(result);
        // success
        await axios
          .post(BASE_URL + "/auth/login", {
            ph_number: "+91" + ph_number,
            password: result.user.multiFactor.user.uid,
          })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-3/5 drop-shadow-lg justify-around">
        <input
          onChange={(e) => dispatch(setOtp(e.target.value))}
          type="number"
          placeholder="OTP"
          className="border p-5 w-full tracking-widest rounded-lg"
        />
      </div>
      <div className="flex my-6 justify-end w-3/5">
        {/* <div className="flex">
          Resend Code in&nbsp; <p className="font-bold">2:43</p>
        </div> */}
      </div>
      <button
        onClick={ValidateOtp}
        className="flex my-20 w-2/6 h-16 justify-center items-center font-bold rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]"
      >
        Verify Now
      </button>
    </div>
  );
};

export default OtpArea;
