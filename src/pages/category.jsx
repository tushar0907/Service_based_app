import axios from "axios";
import React from "react";
import {BASE_URL} from "../base";
import MainCategory from "../components/Categories/MainCategory";
import SubCategory from "../components/Categories/SubCategory";

const Category = () => {
  const [categories, setCategories] = React.useState([]);
  const [subCategories, setSubCategories] = React.useState([]);
  const [categoryLoading, setCategoryLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchCatgories = async () => {
      setCategoryLoading(true);
      await axios
        .get(BASE_URL + "/rest/categories")
        .then((res) => setCategories(res.data.results))
        .finally(() => setCategoryLoading(false));
    };
    fetchCatgories();
  }, []);

  const loadSubCategories = async (cid) => {
    setIsLoading(true);
    await axios(BASE_URL + "/rest/category_sub/" + cid)
      .then((res) => setSubCategories(res.data.results))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex w-full h-3/5 flex-col">
      <MainCategory
        fetchSubCategories={loadSubCategories}
        categories={categories}
        isLoading={categoryLoading}
      />
      <SubCategory isLoading={isLoading} subCategories={subCategories} />
    </div>
  );
};

export default Category;
