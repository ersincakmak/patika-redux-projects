import { useAppDispatch, useAppSelector } from "../../redux/store";
import { changeText } from "../../redux/textSlice";
import "./index.scss";

const Input = () => {
  const { text, example_text, mode } = useAppSelector((state) => state.text);

  const dispatch = useAppDispatch();

  return (
    <textarea
      className="input"
      disabled={mode === "example"}
      value={mode === "example" ? example_text : text}
      onChange={(e) => {
        dispatch(changeText(e.target.value));
      }}
    />
  );
};

export default Input;
