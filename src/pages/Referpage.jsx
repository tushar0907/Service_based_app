import React from "react";
import HeadBanner from "../components/Refer/HeadBanner";
import CouponCode from "../components/Refer/CouponCode";
import FAQ from "../components/Refer/FAQ";

const Referpage = () => {
  return (
    <div className="flex h-full w-3/4 mt-4 flex-col">
      <HeadBanner />
      <CouponCode />
      <FAQ />
    </div>
  );
};

export default Referpage;
