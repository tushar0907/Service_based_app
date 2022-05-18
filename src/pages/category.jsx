import React from "react";
import MainCategory from "../components/Categories/MainCategory";
import SubCategory from "../components/Categories/SubCategory";

const category = () => {
  return (
    <div className="flex w-full h-3/5 flex-col">
      <MainCategory />
      <SubCategory />
    </div>
  );
};

export default category;
