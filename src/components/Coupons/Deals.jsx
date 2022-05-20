import React from "react";
import {MdContentCopy} from "react-icons/md";

const Deals = () => {
  return (
    <div className="flex flex-col justify-around p-8 w-full font-worksans">
      <div className="flex font-bold p-6 text-lg">Coupons</div>
      <div className="flex flex-col overflow-y-scroll rounded-xl p-6 border-dotted border-2 border-[#FCB512] h-64 w-3/4">
        <div className="flex flex-1">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
        </div>
        <div className="flex p-4">
          <p>Offer Valid till -</p>
          <h2 className="font-bold text-md">30 April</h2>
        </div>
        <div className="flex p-4 w-full">
          <div className="flex font-bold text-[#FCB512] flex-1">DEAL500</div>
          <div className="flex  justify-end flex-1">
            <MdContentCopy size="20" style={{color: "#FCB512"}} />
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-y-scroll rounded-xl p-6 border-dotted border-2 border-[#FCB512] h-64 w-3/4">
        <div className="flex flex-1">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
        </div>
        <div className="flex p-4">
          <p>Offer Valid till -</p>
          <h2 className="font-bold text-md">30 April</h2>
        </div>
        <div className="flex p-4">
          <div className="flex font-bold text-[#FCB512] flex-1">DEAL500</div>
          <div className="flex justify-end flex-1">
            <MdContentCopy size="20" style={{color: "#FCB512"}} />
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-y-scroll rounded-xl p-6 border-dotted border-2 border-[#FCB512] h-64 w-3/4">
        <div className="flex flex-1">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
        </div>
        <div className="flex p-4">
          <p>Offer Valid till -</p>
          <h2 className="font-bold text-md">30 April</h2>
        </div>
        <div className="flex p-4">
          <div className="flex font-bold text-[#FCB512] flex-1">DEAL500</div>
          <div className="flex flex-1 justify-end">
            <MdContentCopy size="20" style={{color: "#FCB512"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
