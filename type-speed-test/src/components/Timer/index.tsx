/* eslint-disable react-hooks/exhaustive-deps */
import formatDuration from "format-duration";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { decreaseTimer, stopTimer } from "../../redux/wordSlice";
import "./index.scss";

interface Props {}

const Timer = (props: Props) => {
  const { time, timerStart } = useAppSelector((state) => state.words);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let myInterval: NodeJS.Timeout | null = null;

    if (timerStart === "started" && myInterval === null) {
      myInterval = setInterval(() => {
        dispatch(decreaseTimer());
      }, 1000);
    } else {
      myInterval && clearInterval(myInterval);
    }

    return () => {
      myInterval && clearInterval(myInterval);
    };
  }, [timerStart, time]);

  useEffect(() => {
    if (time <= 0) {
      dispatch(stopTimer());
    }
  }, [time]);

  return <div className="timer">{formatDuration(time * 1000)}</div>;
};

export default Timer;
