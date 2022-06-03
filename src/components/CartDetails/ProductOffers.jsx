import React from "react";

const CartOffers = () => {
  return (
    <div className="flex font-worksans flex-col mt-20 flex-1 w-3/4">
      <div className="flex font-bold pb-3 pt-5 text-2xl lg:pt-40 md:pt-60 xl:pt-40 2xl:pt-40">
        Special Offers
      </div>
      <div className="flex pt-6 justify-start space-x-10">
        <div className="flex p-4 flex-col border-2 md:mr-3 border-[#FCB512] rounded-xl w-96 h-40 md:h-64">
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
        <div className="flex p-4 flex-col border-2 border-[#FCB512] rounded-xl w-96 h-40 md:h-64">
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
      <div className="flex border-b flex-col w-full h-56 mt-8">
        <div className="flex font-bold text-lg pt-5 pb-3">
          <p>Instructions</p>
        </div>
        <div className="flex">
          <p>
            <ul>
              <li>1.Ac volutpat odio odio et rhoncus.</li>
              <li>
                2.Lectus mauris pharetra posuere dignissim luctus on faucibis
                sed.
              </li>
              <li>3. Vitae elite ante et eget in ultrices proin.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartOffers;
