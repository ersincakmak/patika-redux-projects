import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../redux/store";

const Line_Chart = () => {
  const { daily } = useAppSelector((state) => state.covid);

  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      className="container mx-auto"
    >
      <LineChart
        width={500}
        height={300}
        data={daily}
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
        <Legend />
        <Line type="monotone" dataKey="infected" stroke="#82ca9d" />
        <Line type="monotone" dataKey="deaths" stroke="#822525" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Line_Chart;
