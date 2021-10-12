import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API__URI } from "../constants/api";
import { ApiResponse } from "../types/response";
import { WordState } from "../types/word";

const initialState: WordState = {
  words: [],
  time: 60,
  selectedIndex: 0,
  timerStart: "idle",
  totalKeyPress: 0,
  wrongKeyPress: 0,
  selectionWrong: false,
  rightIndexes: [],
  wrongIndexes: [],
  inputValue: "",
};

export const fetchWords = createAsyncThunk("word/fetchWords", async () => {
  const { data } = await axios.request<ApiResponse>({
    method: "GET",
    url: API__URI,
  });

  return data;
});

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timerStart = "started";
    },
    stopTimer: (state) => {
      state.timerStart = "stoped";
    },
    decreaseTimer: (state) => {
      state.time > 0 ? (state.time -= 1) : (state.time = 0);
    },
    increaseTotalKeyPress: (state) => {
      state.totalKeyPress += 1;
    },
    increaseWrongKeyPress: (state) => {
      state.wrongKeyPress += 1;
    },
    setSelectionWrong: (state, action: PayloadAction<boolean>) => {
      state.selectionWrong = action.payload;
    },
    onSpacePress: (state) => {
      if (state.inputValue.trim() === state.words[state.selectedIndex]) {
        state.rightIndexes.push(state.selectedIndex);
      } else {
        state.wrongIndexes.push(state.selectedIndex);
      }

      state.selectedIndex += 1;
      state.inputValue = "";
      state.selectionWrong = false;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload.trim();
    },
    resetValues: (state) => {
      state.inputValue = "";
      state.rightIndexes = [];
      state.selectedIndex = 0;
      state.selectionWrong = false;
      state.time = 60;
      state.totalKeyPress = 0;
      state.words = [];
      state.wrongIndexes = [];
      state.wrongKeyPress = 0;
      state.timerStart = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.fulfilled, (state, action) => {
      state.words = action.payload;
    });
  },
});

export const {
  startTimer,
  stopTimer,
  decreaseTimer,
  increaseTotalKeyPress,
  increaseWrongKeyPress,
  setInputValue,
  onSpacePress,
  setSelectionWrong,
  resetValues,
} = wordSlice.actions;

export default wordSlice.reducer;
