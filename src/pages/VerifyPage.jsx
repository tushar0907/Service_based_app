import React from "react";
import Text from "../components/Verify/Text";
import OtpArea from "../components/Verify/OtpArea";

const VerifyPage = () => {
  return (
    <div className="w-3/4 h-full font-worksans flex-col">
      <Text />
      <OtpArea />
    </div>
  );
};

export default VerifyPage;
