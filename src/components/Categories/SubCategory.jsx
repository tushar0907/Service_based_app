import React from "react";
import {Link} from "react-router-dom";

const SubCategory = (props) => {
  return (
    <div className="flex flex-1  border-b border-[#FCB512] lg:pb-16 lg:justify-center">
      {props.isLoading
        ? null
        : props.subCategories.map((sub) => (
            <Link
              to={`/products/${sub.name}/${sub.scid}`}
              key={sub.name + sub.scid}
              className="flex ">
              <div className="flex font-worksans font-medium text-lg p-6 pl-8"></div>
              <div className="flex justify-center">
                <div className="flex flex-col flex-1 items-center justify-around">
                  {" "}
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center w-32 h-32 border-4 border-[#FCB512] rounded-xl">
                      <img
                        className="h-30 flex justify-center items-center mt-3"
                        src={sub.image}
                        alt="construction"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-center w-24 text-sm lg:mt-2 lg:w-40">
                    {sub.name}
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default SubCategory;
