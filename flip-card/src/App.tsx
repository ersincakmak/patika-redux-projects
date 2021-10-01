import { useEffect } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { checkCards, setGameEnd, shuffleCards } from "./redux/cardSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";

// @ts-ignore
import ConfettiGenerator from "confetti-js";
import RestartGame from "./components/RestartGame";

function App() {
  const dispatch = useAppDispatch();

  const { selected, data, isGameEnd } = useAppSelector((state) => state.card);

  useEffect(() => {
    dispatch(shuffleCards());
  }, [dispatch]);

  useEffect(() => {
    if (selected.length === 2) {
      setTimeout(() => {
        dispatch(checkCards());
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    const isEveryMatched = data.every((item) => item.matched);

    if (isEveryMatched) {
      dispatch(setGameEnd());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);

    if (isGameEnd) {
      confetti.render();
    } else {
      confetti.clear();
    }
    return () => confetti.clear();
  }, [isGameEnd]);

  return (
    <div>
      <canvas id="my-canvas" className="absolute -z-1"></canvas>
      <Header />
      <CardList />
      <RestartGame />
    </div>
  );
}

export default App;
