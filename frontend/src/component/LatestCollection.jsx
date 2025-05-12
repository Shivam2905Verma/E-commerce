import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  let { products } = useContext(ShopContext);

  let [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-base md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          itaque temporibus vel quos voluptas porro blanditiis
        </p>
      </div>

      {/*Renderning Products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {latestProduct.map((item, index) => {
        return (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image[0]}
            name={item.name}
            price={item.price}
          />
        );
      })}
      </div>
    </div>
  );
};

export default LatestCollection;
