import React from "react";

// @ts-ignore
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { flipCard } from "../../redux/cardSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ICard } from "../../types/card";

interface Props {
  item: ICard;
}

const Card: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector((state) => state.card);

  return (
    <Flippy
      className={`p-0 ${
        (selected.length === 2 || item.matched) && "pointer-events-none"
      }`}
      style={{
        display: "block",
        width: "100px",
        height: "100px",
        padding: 0,
      }}
      flipOnClick={false} // default false
      isFlipped={item.flipped}
      onClick={() => dispatch(flipCard(item.id))}
    >
      <FrontSide className="p-0 flex items-center justify-center text-gray-500 font-semibold text-5xl bg-gray-200 select-none cursor-pointer">
        ?
      </FrontSide>
      <BackSide
        className={`p-0 cursor-pointer select-none ${
          item.matched && "shadow-none"
        }`}
      >
        <img
          alt=""
          src={item.content}
          className={`w-full h-full object-contain p-4 `}
        />
      </BackSide>
    </Flippy>
  );
};

export default Card;
