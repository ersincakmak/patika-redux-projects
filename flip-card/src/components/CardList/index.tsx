import { useAppSelector } from "../../redux/store";
import Card from "../Card";

const CardList = () => {
  const { data } = useAppSelector((state) => state.card);

  return (
    <div className="mx-auto grid grid-cols-6 grid-rows-5 gap-4 w-max">
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default CardList;
