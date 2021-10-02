import { useAppDispatch, useAppSelector } from "../../redux/store";
import { changeMode } from "../../redux/textSlice";
import "./index.scss";

const ExampleButton = () => {
  const dispatch = useAppDispatch();

  const { mode } = useAppSelector((state) => state.text);

  return (
    <button
      className={`exampleButton ${
        mode === "example" ? "exampleButton--active" : ""
      }`}
      onClick={() => {
        dispatch(changeMode());
      }}
    >
      ?
    </button>
  );
};

export default ExampleButton;
