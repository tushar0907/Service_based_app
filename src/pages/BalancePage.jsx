import React from "react";

const WalletPage = () => {
  return (
    <div className="flex font-worksans h-full w-3/4 mt-4 flex-col">
      <div className="flex flex-col w-full">
        <div className="flex font-semibold text-lg pt-5">Wallet</div>
        <div className="flex h-72 p-3 justify-center items-center w-full">
          <img
            style={{width: "25rem"}}
            src={require("../assets/balance.png")}
          />
        </div>
        <div className="flex p-4 justify-between w-full overflow-x-scroll">
          <div className="flex h-16 w-52 md:mr-4 rounded-lg font-bold text-md items-center justify-center bg-[#FCB512]">
            + ₹ 50{" "}
          </div>
          <div className="flex h-16 w-52 md:mr-4 rounded-lg font-bold text-md items-center justify-center bg-[#FCB512]">
            + ₹ 100{" "}
          </div>
          <div className="flex h-16 w-52 md:mr-4 rounded-lg font-bold text-md items-center justify-center bg-[#FCB512]">
            + ₹ 200{" "}
          </div>
          <div className="flex h-16 w-52 md:mr-4 rounded-lg font-bold text-md items-center justify-center bg-[#FCB512]">
            + ₹ 300{" "}
          </div>
          <div className="flex h-16 w-52 md:mr-4 rounded-lg font-bold text-md items-center justify-center bg-[#FCB512]">
            + ₹ 400{" "}
          </div>
          <div className="flex h-16 w-52 md:mr-4 rounded-lg font-bold text-md items-center justify-center bg-[#FCB512]">
            + ₹ 500{" "}
          </div>
        </div>
        <div className="flex w-full my-5 p-7 items-enter justify-center">
          <input
            type="number"
            className="flex pl-5 w-96 h-16 border rounded-l-lg border-[#FCB512]"
            placeholder="ENTER AMOUNT TO ADD"
          />
          <button className="flex font-bold items-center justify-center w-40 h-16 rounded-r-lg bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
            ADD
          </button>
        </div>
        <div className="flex flex-col p-5 w-full">
          <div className="flex text-lg p-4 font-semibold items-center justify-center">
            Balance Available
          </div>
          <div className="flex text-5xl items-center justify-center font-bold text-[#FCB512]">
            ₹ 1500
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
