import React from "react";
import {GrFormClose} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {BASE_URL} from "../../base";
import {useDispatch, useSelector} from "react-redux";
import {auth, firebase} from "../../firebasec";
import {setType, setPhNumber, setName, setResult} from "../../context/login";
import {useNavigate} from "react-router-dom";

const BottomArea = () => {
  const dispatch = useDispatch();
  const {ph_number, name} = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    dispatch(setType("register"));
  }, []);

  const signInWithPhoneNumber = () => {
    try {
      setIsLoading(true);
      if (ph_number === "" || ph_number.length < 10) return;
      setIsLoading(false);
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      setIsLoading(true);
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
    } catch (err) {
      setIsLoading(false);
    }
  };

  function ClearFields() {
    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
  }
  return (
    <div className="flex flex-col h-2/4 w-full">
      <div className="flex flex-col h-56 justify-around items-center">
        <div className="flex h-10 rounded-xl">
          <div className="flex justify-center h-10 items-center w-16 rounded-l-xl font-bold border">
            <CgProfile size="30" />
          </div>
          <input
            type="text"
            id="textfield1"
            className="border w-96"
            placeholder="Enter FULL NAME"
            onChange={(e) => dispatch(setName(e.target.value))}
            value={name}
          />
          <GrFormClose
            onClick={ClearFields}
            className="flex border h-10 w-10 rounded-r-xl"
          />
        </div>
        <div className="flex h-10 rounded-xl">
          <div className="flex h-10 justify-center items-center w-16 rounded-l-xl font-bold border">
            +91
          </div>
          <input
            type="number"
            id="textfield2"
            className="border w-96"
            placeholder="Enter Mobile Number"
            onChange={(e) => dispatch(setPhNumber(e.target.value))}
            value={ph_number}
          />
          <GrFormClose
            onClick={ClearFields}
            className="flex border h-10 w-10 rounded-r-xl"
          />
        </div>
        <div className="flex w-72">
          <input
            value={isChecked}
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.value)}
            className="flex h-10 w-10 mx-6"
          />
          <p>
            By checking you agree to our Terms and Condition and Privacy Policy
          </p>
        </div>

        <div id="recaptcha-container"></div>
      </div>
      <div className="flex flex-col h-56  items-center justify-around w-full">
        <button
          onClick={() => signInWithPhoneNumber()}
          className={`flex ${
            isLoading ? "animate-pulse" : ""
          } w-96 h-10 items-center justify-center rounded-lg border-2 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]  font-medium text-md`}>
          Send OTP
        </button>
        <div className="flex w-80 h-12 items-center justify-center border-b">
          OR NEW HERE?
        </div>
        <button className="flex w-96 h-12 justify-center border-[#FCB512] text-[#FCB512] items-center rounded-lg font-medium text-md">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default BottomArea;
