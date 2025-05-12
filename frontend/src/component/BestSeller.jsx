import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  let { products } = useContext(ShopContext);
  let [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    let bestSeller = products.filter((item) => {
       return item.bestseller;
    });
    setBestSeller(bestSeller.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt
          commodi laudantium, explicabo quasi nam maiores voluptatum aliquid est
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image[0]}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
