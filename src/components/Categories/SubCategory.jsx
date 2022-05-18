import React from "react";

const SubCategory = (props) => {
  return (
    <div className="flex  flex-col flex-1 border-b border-[#FCB512]">
      <div className="flex font-worksans font-medium text-lg p-6 pl-8">
        Sub Categories
      </div>
      <div className="flex flex-1 items-center justify-around">
        {props.isLoading
          ? null
          : props.subCategories.map((sub) => (
              <div
                key={sub.name + sub.scid}
                className="flex items-center flex-col">
                <div className="flex justify-center items-center w-40 h-40 border-4 border-[#FCB512] rounded-xl">
                  <img className="h-20" src={sub.image} alt="construction" />
                </div>
                {sub.name}
              </div>
            ))}
      </div>
    </div>
  );
};

export default SubCategory;
