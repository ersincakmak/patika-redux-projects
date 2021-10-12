import "./index.scss";
import { useAppSelector } from "../../redux/store";
import { useEffect } from "react";

const WordList = () => {
  const { words, selectedIndex, selectionWrong, wrongIndexes, rightIndexes } =
    useAppSelector((state) => state.words);

  useEffect(() => {
    document
      .querySelector(`[data-wordnumber='${selectedIndex}']`)
      ?.scrollIntoView();
  }, [selectedIndex]);

  return (
    <div className="wordList__wrapper">
      <div className="wordList">
        {words.map((item, index) => (
          <span
            data-wordnumber={index}
            className={`${
              selectedIndex === index
                ? selectionWrong
                  ? "selected selected--wrong"
                  : "selected"
                : ""
            }  ${
              wrongIndexes.findIndex((item) => item === index) > -1
                ? "wrong"
                : ""
            }  ${
              rightIndexes.findIndex((item) => item === index) > -1
                ? "true"
                : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordList;
