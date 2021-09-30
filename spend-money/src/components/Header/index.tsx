import React from "react";
import NumberFormat from "react-number-format";
import { useAppSelector } from "../../redux/store";

interface Props {}

const Header = (props: Props) => {
  const { money } = useAppSelector((state) => state.product);

  return (
    <>
      <h1 className="text-center text-3xl p-3">Spend Bill Gates' Money</h1>
      <span className="sticky top-0 z-20 w-full bg-gray-200 p-3 mt-4">
        <NumberFormat
          thousandSeparator={true}
          prefix={"$"}
          value={money}
          className="text-center bg-indigo-500 px-4 py-3 text-2xl text-white font-semibold rounded mx-auto block outline-none border-none pointer-events-none"
        />
      </span>
    </>
  );
};

export default Header;
