import React from "react";
import { useAppSelector } from "../../redux/store";
import Card from "../Card";

const Cards = () => {
  const { active, deaths, infected, recovered } = useAppSelector(
    (state) => state.covid
  );

  return (
    <div className="container flex flex-col justify-between mx-auto gap-3 md:flex-row">
      <Card
        title="Infected"
        color="blue"
        information="Number of active cases of COVID-19"
        data={infected}
      />
      <Card
        title="Recovered"
        color="green"
        information="Number of recoveries from COVID-19"
        data={recovered}
      />
      <Card
        title="Deaths"
        color="red"
        information="Number of deaths caused by COVID-19"
        data={deaths}
      />
      <Card
        title="Active"
        color="yellow"
        information="Number of Active Cases of COVID-19"
        data={active}
      />
    </div>
  );
};

export default Cards;
