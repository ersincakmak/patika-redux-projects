import { MdKeyboardArrowDown } from "react-icons/md";
import { setSelected } from "../../redux/covidSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Controls = () => {
  const { countries, selected } = useAppSelector((state) => state.covid);

  const dispatch = useAppDispatch();

  return (
    <div className="w-max mx-auto relative">
      <MdKeyboardArrowDown className="text-2xl absolute z-20 pointer-events-none right-3 top-1/2 transform -translate-y-1/2" />
      <select
        className="w-96 mx-auto border border-gray-800 p-3 relative appearance-none rounded outline-none cursor-pointer"
        onChange={(e) => {
          dispatch(setSelected(e.target.value));
        }}
        value={selected}
      >
        <option value="Global">Global</option>
        {countries.map((item) => (
          <option key={item.iso2} value={item.iso2}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Controls;
