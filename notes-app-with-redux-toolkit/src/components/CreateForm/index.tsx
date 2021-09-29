import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { addNote } from "../../redux/noteSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import ColorBall from "./ColorBall";

export type ColorsType = "pink" | "purple" | "yellow" | "blue" | "green";
const colors: ColorsType[] = ["pink", "purple", "yellow", "blue", "green"];

const CreateForm = () => {
  const [text, settext] = useState("");

  const { selectedColor } = useAppSelector((state) => state.note);

  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center mt-5 mx-auto container px-6">
      <div className="bg-white w-700 shadow-sm">
        <TextareaAutosize
          placeholder="Enter your note here..."
          className="resize-none bg-transparent w-full outline-none p-5"
          minRows={3}
          value={text}
          onInput={(e) => settext(e.currentTarget.value)}
        />

        <div className="p-5 pt-0 flex items-center justify-between">
          <div className="flex w-max gap-2">
            {colors.map((item) => (
              <ColorBall color={item} name="color" value="pink" key={item} />
            ))}
          </div>

          <button
            className={`px-4 py-1.5 rounded text-gray-50 font-semibold border-none outline-none bg-${selectedColor} transition`}
            onClick={() => {
              if (text.length) {
                dispatch(addNote(text));
                settext("");
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
