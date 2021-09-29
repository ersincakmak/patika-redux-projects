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
      className={`min-w-150 max-w-200 flex-1 h-auto p-3 text-gray-50 font-semibold rounded bg-${item.color} border-l-8 border-${item.color}-black`}
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
