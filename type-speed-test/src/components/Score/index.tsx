import { useAppSelector } from "../../redux/store";
import "./index.scss";

const Score = () => {
  const { rightIndexes, totalKeyPress, wrongIndexes, wrongKeyPress } =
    useAppSelector((state) => state.words);

  return (
    <div className="score">
      <h1>Results</h1>
      <div className="score__row">
        Kestrokes
        <span className="score__rightSide">
          <span className="score__min">
            (
            <span className="score__green">
              {totalKeyPress - wrongKeyPress}
            </span>
            |<span className="score__red">{wrongKeyPress}</span>)
          </span>
          {totalKeyPress}
        </span>
      </div>
      <div className="score__row">
        Correct Words
        <span className="score__rightSide score__green">
          {rightIndexes.length}
        </span>
      </div>
      <div className="score__row">
        Wrong Words
        <span className="score__rightSide score__red">
          {wrongIndexes.length}
        </span>
      </div>
    </div>
  );
};

export default Score;
