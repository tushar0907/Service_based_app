import axios from "axios";
import React from "react";
import {CgMore} from "react-icons/cg";

const MainCategory = (props) => {
  const fetchCategory = async (link) => {
    await axios.get(link).then((res) => "");
  };
  return (
    <div className="flex flex-col flex-1 border-b border-[#FCB512]">
      <div className="flex font-worksans font-medium text-lg p-6 pl-8">
        Categories
      </div>
      <div className="flex items-center py-3 overflow-x-auto ">
        {props.categories.map((category) => (
          <div
            key={category.name + category.cid}
            onClick={() => props.fetchSubCategories(category.cid)}
            className="flex-none items-center mx-2 h-48 w-48 bg-red-200 rounded-xl overflow-hidden flex-col">
            <div
              style={{backgroundImage: `url(${category.image})`}}
              className="flex w-full h-full bg-cover text-center items-center justify-center bg-gray-400">
              <div className="flex justify-center items-center text-center bg-black h-full w-full bg-opacity-25 text-white font-bold p-5">
                {category.name}
              </div>
            </div>
          </div>
        ))}
        {props.nextLink ? (
          <div
            onClick={() => fetchCategory(props.nextLink)}
            className="flex-none items-center mx-2 h-48 w-48 rounded-xl overflow-hidden flex-col">
            <div className="flex w-full h-full bg-cover text-center items-center justify-center border">
              <div className="flex flex-col justify-center items-center text-sm text-center h-full w-full bg-opacity-25 p-5">
                <CgMore size="40" />
                See More
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainCategory;
