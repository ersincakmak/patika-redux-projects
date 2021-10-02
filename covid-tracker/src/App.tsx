import React, { useEffect } from "react";
import Cards from "./components/Cards";
import { Bar, Line } from "./components/Charts";
import Controls from "./components/Controls";
import Header from "./components/Header";
import {
  fetchBase,
  fetchCountries,
  fetchDaily,
  fetchSingular,
} from "./redux/covidSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";

const App = () => {
  const { selected } = useAppSelector((state) => state.covid);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selected === "Global") {
      dispatch(fetchBase());
      dispatch(fetchDaily());
    } else {
      dispatch(fetchSingular(selected));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="w-screen h-screen flex flex-col p-10 gap-10">
      <Header />
      <Cards />
      <Controls />
      {selected === "Global" ? <Line /> : <Bar />}
    </div>
  );
};

export default App;
