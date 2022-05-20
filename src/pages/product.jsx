import React from "react";
import Top from "../components/VehicleCleaning/Top";
import Body from "../components/VehicleCleaning/Body";
import {useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../base";

const Product = () => {
  const params = useParams();

  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      await axios
        .get(BASE_URL + "/rest/subcategory/" + params.scid)
        .then((res) => setProducts(res.data.results))
        .finally(() => setIsLoading(false));
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <Top />
      <div className="flex flex-col w-full items-center py-5">
        <Body isLoading={isLoading} products={products} />
      </div>
    </div>
  );
};

export default Product;
