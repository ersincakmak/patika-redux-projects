import React from "react";
import { useAppSelector } from "../../redux/store";
import Note from "../Note";

const Notes = () => {
  const { filteredNotes } = useAppSelector((state) => state.note);

  return (
    <div className="flex container justify-center px-6 mx-auto">
      <div className="w-700 flex flex-wrap justify-start gap-2 mt-5">
        {filteredNotes.map((item, index) => (
          <Note item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
