import React from "react";
import {MdContentCopy} from "react-icons/md";
import {useNavigate} from "react-router-dom";

const CouponCode = () => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-1 w-full flex-col h-56">
      <div className="flex h-32 w-full items-center justify-center">
        <div className="flex rounded-xl mt-20 h-32 w-3/5 border-dashed border-[#FCB512] border-2 md:mt-40">
          <div className="flex flex-1 items-center justify-center h-26 flex-col border-r border-[#FCB512] ">
            <p>Your referral Code</p>
            <h1 className="flex font-bold justify-center items-center text-[#FCB512] text-5xl">
              {user?.referal_code}
            </h1>
          </div>
          <div className="flex items-center p-4">
            <MdContentCopy style={{color: "#FCB512"}} size="30" />
          </div>
        </div>
      </div>
      <div className="flex mt-20 w-full items-center justify-center flex-1 md:mt-32">
        <button className="flex rounded-xl font-bold text-lg items-center justify-center h-20 w-3/5 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
          <p>Share referral code</p>
        </button>
      </div>
    </div>
  );
};

export default CouponCode;
