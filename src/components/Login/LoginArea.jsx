import React from "react";
import { GrFormClose } from "react-icons/gr";
import { auth, firebase } from "../../firebasec";
import { useDispatch, useSelector } from "react-redux";
import { setPhNumber, setResult } from "../../context/login";
import { useNavigate } from "react-router-dom";

const LoginArea = () => {
  const ph_number = useSelector((state) => state.login.ph_number);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithPhoneNumber = () => {
    if (ph_number === "" || ph_number.length < 10) return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber("+91" + ph_number, verify)
      .then((result) => {
        dispatch(setResult(result));
        navigate("/verify");
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  return (
    <div className="flex flex-col h-2/4 w-full">
      <div className="flex flex-col h-56 items-center justify-center">
        <div className="flex h-10 rounded-xl">
          <div className="flex h-10 justify-center items-center w-16 rounded-l-xl font-bold border">
            +91
          </div>
          <input
            type="number"
            className="border w-96 px-2"
            placeholder="Enter Mobile Number"
            value={ph_number}
            onChange={(e) => dispatch(setPhNumber(e.target.value))}
          />
          <GrFormClose size={30} className="flex border h-full" />
        </div>
        <div id="recaptcha-container"></div>
      </div>
      <div className="flex flex-col h-56  items-center justify-around w-full">
        <button
          onClick={signInWithPhoneNumber}
          className="flex w-96 h-12 justify-center items-center bg-gradient-to-r from-[#FFD36F] to-[#F1AD10] rounded-lg font-medium text-md"
        >
          Send OTP
        </button>
        <div className="flex w-80 h-12 items-center justify-center border-b">
          OR NEW HERE?
        </div>
        <div className="flex w-96 h-10 items-center justify-center rounded-lg border-2 border-[#FCB512] text-[#FCB512] font-medium text-md">
          Register
        </div>
      </div>
    </div>
  );
};

export default LoginArea;
