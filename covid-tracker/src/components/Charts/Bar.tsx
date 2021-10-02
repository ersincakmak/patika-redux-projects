import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "../../redux/store";

const BarC = () => {
  const { active, deaths, infected, recovered } = useAppSelector(
    (state) => state.covid
  );

  const data = [
    {
      name: "Infected",
      people: infected,
    },
    {
      name: "Recovered",
      people: recovered,
    },
    {
      name: "Deaths",
      people: deaths,
    },
    {
      name: "Active",
      people: active,
    },
  ];

  const colors = ["#7d7dfd", "#6efa70", "#fd7d7d", "#f5f27d"];

  return (
    <ResponsiveContainer
      height={400}
      className="container mx-auto w-full max-w-700"
    >
      <BarChart
        data={data}
        barSize={40}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="people">
          {data.map((entry, index) => (
            <Cell cursor="pointer" fill={colors[index]} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarC;
