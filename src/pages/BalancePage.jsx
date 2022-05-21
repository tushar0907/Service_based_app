import React from "react";
import Prices from "../components/Wallet/Prices";
import Suggestions from "../components/Wallet/Suggestions";
import Faq from "../components/Wallet/Faq";

const WalletPage = () => {
  return (
    <div className="flex flex-col h-full w-3/4 bg-red-400">
      <Prices />
      <Suggestions />
      <Faq />
    </div>
  );
};

export default WalletPage;
