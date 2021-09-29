import React from "react";
import { note } from "../../redux/noteSlice";
import { useAppSelector } from "../../redux/store";

interface Props {
  item: note;
}

const Note: React.FC<Props> = ({ item }) => {
  const { filterString } = useAppSelector((state) => state.note);

  return (
    <div
      className={`min-w-150 max-w-200 flex-1 h-auto p-3 text-gray-50 font-semibold rounded ${
        item.color === "blue"
          ? "bg-blue"
          : item.color === "green"
          ? "bg-green"
          : item.color === "pink"
          ? "bg-pink"
          : item.color === "purple"
          ? "bg-purple"
          : item.color === "yellow" && "bg-yellow"
      } border-l-8 ${
        item.color === "blue"
          ? "border-blue-black"
          : item.color === "green"
          ? "border-green-black"
          : item.color === "pink"
          ? "border-pink-black"
          : item.color === "purple"
          ? "border-purple-black"
          : item.color === "yellow" && "border-yellow-black"
      }`}
    >
      {item.note.split(" ").map((string) => (
        <>
          <span
            className={`w-max ${
              filterString.length &&
              filterString
                .split(" ")
                .map((item) =>
                  new RegExp(item, "i").test(string) ? "underline" : ""
                )
                .join(" ")
            }`}
          >
            {string}
          </span>{" "}
        </>
      ))}
    </div>
  );
};

export default Note;
