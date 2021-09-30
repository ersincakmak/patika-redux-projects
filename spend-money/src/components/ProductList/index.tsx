import React from "react";
import { useAppSelector } from "../../redux/store";
import Product from "../Product";

interface Props {}

const ProductList = (props: Props) => {
  const { products } = useAppSelector((state) => state.product);

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
