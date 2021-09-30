import React from "react";
import NumberFormat from "react-number-format";
import { useAppSelector } from "../../redux/store";

interface Props {}

const Receipt = (props: Props) => {
  const { basket } = useAppSelector((state) => state.product);

  if (!basket.length) {
    return null;
  }

  return (
    <div className="max-w-6xl w-full p-5 mx-auto  rounded shadow-sm mb-3">
      <h2 className="text-center text-3xl mb-5t text-indigo-500 mb-4">
        Your Receipt
      </h2>
      <table className="w-full bg-white rounded">
        <tr>
          <td className=" font-bold text-center w-24 p-3">Img</td>
          <td className=" font-bold text-center">Name</td>
          <td className=" font-bold text-center">Amount</td>
          <td className=" font-bold text-center">Price</td>
          <td className=" font-bold text-center">Total</td>
        </tr>
        {basket.map((item) => (
          <tr>
            <td className="flex items-center justify-center">
              <img className="w-20 h-20" src={item.img} alt="asd" />
            </td>
            <td className=" text-center">{item.name}</td>
            <td className=" text-center">{item.amount}x</td>
            <td className=" text-center">
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={item.price}
                className="outline-none border-none pointer-events-none text-center"
              />
            </td>
            <td className=" text-center">
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={item.price * item.amount}
                className="outline-none border-none pointer-events-none text-center"
              />
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className="text-right font-bold p-3">
            Total :
          </td>
          <td className="text-center">
            <NumberFormat
              thousandSeparator={true}
              prefix={"$"}
              value={basket.reduce(
                (acc, cur) => acc + cur.price * cur.amount,
                0
              )}
              className="outline-none border-none pointer-events-none text-center"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Receipt;
