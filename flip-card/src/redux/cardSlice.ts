import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../cardList";
import { ICardState } from "../types/card";

const myData = data.map((item, index) => {
  return [
    { id: 2 * index, flipped: false, content: item.content, matched: false },
    {
      id: 2 * index + 1,
      flipped: false,
      content: item.content,
      matched: false,
    },
  ];
});

const initialState: ICardState = {
  data: myData.flatMap((item) => item),
  move: 0,
  selected: [],
  score: 0,
  isGameEnd: false,
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor((Math.random() * currentIndex) / 2);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    shuffleCards: (state) => {
      state.data = shuffle(myData.flatMap((item) => item));
      state.isGameEnd = false;
      state.score = 0;
    },
    flipCard: (state, action: PayloadAction<number>) => {
      const index = state.data.findIndex((item) => item.id === action.payload);

      const isFlipped = state.data[index].flipped;

      if (isFlipped) {
        state.selected = state.selected.filter(
          (item) => item.id !== state.data[index].id
        );
      } else {
        state.selected.push(state.data[index]);
      }

      state.data[index].flipped = !state.data[index].flipped;
    },
    checkCards: (state) => {
      if (state.selected[0].content !== state.selected[1].content) {
        state.data = state.data.map((item) =>
          item.matched === false ? { ...item, flipped: false } : { ...item }
        );
        state.score -= 10;
      } else {
        state.data = state.data.map((item) =>
          item.content === state.selected[0].content
            ? { ...item, matched: true }
            : { ...item }
        );
        state.score += 50;
      }
      state.selected = [];
    },
    setGameEnd: (state) => {
      state.isGameEnd = true;
    },
    closeAllCard: (state) => {
      state.data = state.data.map((item) => {
        return { ...item, flipped: false };
      });
    },
  },
});

export const { shuffleCards, flipCard, checkCards, setGameEnd, closeAllCard } =
  cardSlice.actions;

export default cardSlice.reducer;
