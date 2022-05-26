import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../base";
import {useSnackbar} from "notistack";

const Banner = () => {
  const [user, setUser] = React.useState({});
  const [referralCode, setReferralCode] = React.useState(null);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const redeemCode = async () => {
    const token = localStorage.getItem("token");
    await axios
      .patch(
        BASE_URL + "/auth/refer",
        {
          referal_code: referralCode?.toUpperCase(),
        },
        {headers: {Authorization: "Token " + token}}
      )
      .then(async (res) => {
        if (res.status === 404) {
          return enqueueSnackbar("Token not found", {variant: "error"});
        } else if (res.status === 406) {
          return enqueueSnackbar("Coupon already redeemed", {variant: "error"});
        }

        if (res.data.success) {
          enqueueSnackbar("Remeeded Success", {variant: "success"});
          await axios
            .get(BASE_URL + "/auth/details", {
              headers: {
                Authorization: "Token " + token,
              },
            })
            .then((res) => {
              localStorage.removeItem("user");
              localStorage.setItem("user", JSON.stringify(res.data));
              window.location.reload();
            });
        }
      });
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/login");
      }
      setUser(user);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col h-3/5 font-worksans w-full">
      <div className="flex justify-start items-center p-5 font-bold text-md">
        Refer and Earn
      </div>
      <div className="flex p-5 justify-center">
        <img className="flex h-60" src={require("../../assets/mic.png")} />
      </div>
      {user?.refered_by ? null : (
        <div className="flex p-5 justify-center">
          <div className="flex h-16 w-3/5 rounded-xl border-2 border-[#FCB512]">
            <input
              type="text"
              placeholder="ENTER REFER CODE"
              className="flex pl-4 rounded-xl h-full w-full"
              onChange={(e) => setReferralCode(e.target.value)}
            />
            <button
              onClick={redeemCode}
              className="flex w-32 rounded-r-xl items-center justify-center bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
              Apply
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col p-5 h-56 items-center w-full border-b-2">
        <div className="flex font-bold p-1 text-lg">Total points Earned</div>
        <div className="flex font-bold text-5xl text-[#FCB512]">
          {user?.earned_points}
        </div>
      </div>
    </div>
  );
};

export default Banner;
