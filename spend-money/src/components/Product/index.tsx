import React from "react";
import NumberFormat from "react-number-format";
import { buyProduct, sellProduct } from "../../redux/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ProductType } from "../../types/product";

interface Props {
  item: ProductType;
}

const Product: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const { money } = useAppSelector((state) => state.product);

  return (
    <div className="flex flex-col w-full gap-2 items-center p-2 rounded bg-white transform transition hover:-translate-y-1 hover:shadow-myShadow">
      <img src={item.img} alt="itemImage" />
      <p className="text-lg">{item.name}</p>
      <NumberFormat
        thousandSeparator={true}
        prefix={"$"}
        value={item.price}
        className="outline-none border-none pointer-events-none text-xl block w-full bg-indigo-200 rounded py-1 text-center"
      />

      <div className="flex flex-row items-center gap-2 w-full ">
        <button
          className="p-2 px-4 rounded bg-indigo-500 text-white font-semibold disabled:cursor-not-allowed disabled:bg-gray-600 transition"
          disabled={item.amount === 0}
          onClick={() => {
            dispatch(
              sellProduct({
                id: item.id,
              })
            );
          }}
        >
          Sell
        </button>
        <div className="flex flex-col items-center flex-1 bg-gray-300 rounded">
          <p className="font-semibold text-sm">Amount</p>
          <p className="text-sm">{item.amount}</p>
        </div>
        <button
          className="p-2 px-4 rounded bg-indigo-500 text-white font-semibold disabled:cursor-not-allowed disabled:bg-gray-600 transition"
          onClick={() => {
            dispatch(
              buyProduct({
                id: item.id,
              })
            );
          }}
          disabled={item.price > money}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
