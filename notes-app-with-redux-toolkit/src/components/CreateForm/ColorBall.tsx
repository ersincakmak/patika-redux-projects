import { BsCheck } from "react-icons/bs";
import { setColor } from "../../redux/noteSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ColorsType } from "./index";

interface Props {
  color: ColorsType;
  name: string;
  value: string;
}

const ColorBall: React.FC<Props> = ({ color, name, value }) => {
  const { selectedColor } = useAppSelector((state) => state.note);

  const dispatch = useAppDispatch();

  const handleChangeColor = () => {
    dispatch(setColor(color));
  };

  return (
    <label
      className={`w-7 h-7 rounded-full flex items-center justify-center ${
        color === "blue"
          ? "bg-blue"
          : color === "green"
          ? "bg-green"
          : color === "pink"
          ? "bg-pink"
          : color === "purple"
          ? "bg-purple"
          : color === "yellow" && "bg-yellow"
      } cursor-pointer`}
      onClick={handleChangeColor}
    >
      {selectedColor === color && <BsCheck className="text-xl text-gray-50" />}
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden"
        defaultChecked={selectedColor === color}
      />
    </label>
  );
};

export default ColorBall;
