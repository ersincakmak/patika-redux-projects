import { useAppSelector } from "../../redux/store";

const Header = () => {
  const { score } = useAppSelector((state) => state.card);

  return (
    <>
      <div className="text-center text-5xl font-bold bg-clip-text bg-gradient-to-r from-cyan to-purple text-transparent p-5">
        ~ Flip Card Game ~
      </div>
      <div className="text-center text-3xl font-bold bg-clip-text bg-gradient-to-r from-cyan to-purple text-transparent p-5">
        Score : {score}
      </div>
    </>
  );
};

export default Header;
