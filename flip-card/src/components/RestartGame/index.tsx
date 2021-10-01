import { closeAllCard, shuffleCards } from "../../redux/cardSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const RestartGame = () => {
  const { isGameEnd } = useAppSelector((state) => state.card);

  const dispatch = useAppDispatch();

  if (!isGameEnd) {
    return null;
  }

  return (
    <div className="flex items-center justify-center mt-10 z-50">
      <button
        className="bg-cyan rounded font-semibold text-white py-2 hover:bg-cyan-hovered focus:ring-2 ring-purple-light transition self-center p-4"
        onClick={() => {
          dispatch(closeAllCard());

          setTimeout(() => {
            dispatch(shuffleCards());
          }, 500);
        }}
      >
        Restart Game
      </button>
    </div>
  );
};

export default RestartGame;
