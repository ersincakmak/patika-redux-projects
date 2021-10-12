import Timer from "../Timer";
import "./inde.scss";
import { BiRefresh } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  fetchWords,
  increaseTotalKeyPress,
  increaseWrongKeyPress,
  onSpacePress,
  resetValues,
  setInputValue,
  setSelectionWrong,
  startTimer,
} from "../../redux/wordSlice";

const Footer = () => {
  const { words, selectedIndex, time, timerStart, inputValue } = useAppSelector(
    (state) => state.words
  );

  const dispatch = useAppDispatch();

  return (
    <div className="footer">
      <input
        type="text"
        className="footer__input"
        value={inputValue}
        disabled={time <= 0}
        onInput={(e) => {
          if (timerStart === "idle" || timerStart === "stoped") {
            dispatch(startTimer());
          }

          dispatch(setInputValue(e.currentTarget.value));
          const value = e.currentTarget.value.trim().split("");
          const selected = words[selectedIndex].split("");
          let isWrong = false;

          for (let index = 0; index < value.length; index++) {
            // type error
            if (selected[index] !== value[index]) {
              isWrong = true;
            }
          }

          if (isWrong) {
            dispatch(increaseWrongKeyPress());
          }

          dispatch(setSelectionWrong(isWrong));
        }}
        onKeyDown={(e) => {
          if (
            e.key !== "Backspace" &&
            e.key !== "Enter" &&
            e.key !== " " &&
            !e.ctrlKey &&
            e.key !== "Shift"
          ) {
            dispatch(increaseTotalKeyPress());
          }

          if (e.key === " ") {
            dispatch(onSpacePress());
          }
        }}
      />
      <div className="footer__right">
        <Timer />
        <button
          className="footer__button"
          onClick={() => {
            dispatch(resetValues());
            dispatch(fetchWords());
          }}
        >
          <BiRefresh />
        </button>
      </div>
    </div>
  );
};

export default Footer;
