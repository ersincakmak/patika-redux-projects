/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./app.scss";
import "./colors.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Score from "./components/Score";
import ThemeSwitcher from "./components/ThemeSwitcher";
import WordList from "./components/WordList";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { fetchWords } from "./redux/wordSlice";

const App = () => {
  const { timerStart } = useAppSelector((state) => state.words);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, []);

  return (
    <div className="App">
      <ThemeSwitcher />
      <Header />
      <WordList />
      <Footer />
      {timerStart === "stoped" && <Score />}
    </div>
  );
};

export default App;
