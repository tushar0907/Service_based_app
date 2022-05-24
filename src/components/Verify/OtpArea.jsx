import axios from "axios";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {BASE_URL} from "../../base";
import {setOtp, setType} from "../../context/login";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

const OtpArea = () => {
  const {result, otp, ph_number, type, name} = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const ValidateOtp = () => {
    console.log(result, otp);
    if (otp === null || result === null) return;
    result
      .confirm(otp)
      .then(async (result) => {
        console.log(result);
        // success
        if (type === "register") {
          await axios
            .post(BASE_URL + "/auth/register", {
              ph_number: "+91" + ph_number,
              password: result.user.multiFactor.user.uid,
              name: name,
              username: name.replace(" ", "_") + String(ph_number).slice(0, 5),
            })
            .then((res) => {
              if (res.data.success) {
                localStorage.setItem("user", JSON.stringify(res.data.data));
                localStorage.setItem("token", res.data.token);
                enqueueSnackbar("Registered Successfully!", {
                  variant: "success",
                });
                navigate("/");
                dispatch(setType("login"));
              } else {
                const errors = res.data.error;
                let keys = Object(errors).keys();
                console.log(keys);
                for (let key of keys) {
                  enqueueSnackbar(errors[key][0], {variant: "error"});
                }
              }
            });
        } else {
          await axios
            .post(BASE_URL + "/auth/user/login", {
              ph_number: "+91" + ph_number,
              password: result.user.multiFactor.user.uid,
            })
            .then((res) => {
              if (res.data.success) {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("token", res.data.token);
                enqueueSnackbar("Login is successful", {variant: "success"});
                navigate("/");
              } else {
                enqueueSnackbar(res.data.error, {variant: "error"});
              }
            });
        }
      })
      .catch((err) => {
        enqueueSnackbar("Wrong OTP", {variant: "error"});
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
        className="flex my-20 w-2/6 h-16 justify-center items-center font-bold rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        Verify Now
      </button>
    </div>
  );
};

export default OtpArea;
