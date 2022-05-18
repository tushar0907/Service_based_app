import React from "react";

const CartOffers = () => {
  return (
    <div className="flex font-worksans -ml-10 flex-col mt-56 flex-1 w-2/3">
      <div className="flex faont-medium text-lg">Special Offers</div>
      <div className="flex flex-1 pt-6 justify-around">
        <div className="flex p-4 flex-col border-2 border-[#FCB512] rounded-xl w-96 h-40">
          <div className="flex font-bold text-lg">
            <p>Save 12% on every Order</p>
          </div>
          <div className="flex pt-3 flex-1">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem
            </p>
          </div>
        </div>
        <div className="flex p-4 flex-col border-2 border-[#FCB512] rounded-xl w-96 h-40">
          <div className="flex font-bold text-lg">
            <p>Save 12% on every Order</p>
          </div>
          <div className="flex pt-3 flex-1">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-64 mt-8 bg-red-700">
        <div className="flex">
          <p>Instructions</p>
        </div>
        <div className="flex">
          <p>
            <ul>
              <li>1.sds</li>
              <li>sdsd</li>
              <li>sdsd</li>
              <li>sdsd</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartOffers;
