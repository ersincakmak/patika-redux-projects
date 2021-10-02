import React from "react";

interface Props {
  color: "blue" | "green" | "red" | "yellow";
  title: string;
  information: string;
  data: number;
}

const Card: React.FC<Props> = ({ color, title, information, data }) => {
  const generateColor = () => {
    if (color === "blue") {
      return " bg-blue-100 border-blue-500 ";
    } else if (color === "green") {
      return " bg-green-100 border-green-500 ";
    } else if (color === "red") {
      return " bg-red-100 border-red-500 ";
    } else if (color === "yellow") {
      return " bg-yellow-100 border-yellow-500 ";
    }
  };

  return (
    <div
      className={`w-full md:w-64 border-l-8 md:border-l-0 md:border-b-8 rounded flex flex-col p-4 gap-2 ${generateColor()}`}
    >
      <h5 className="text-lg font-medium">{title}</h5>
      <p className="text-xl">{data}</p>

      <p className="text-base">{information}</p>
    </div>
  );
};

export default Card;
