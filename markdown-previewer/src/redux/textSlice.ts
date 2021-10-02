import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { example_text } from "../constants/text";
import { ITextState } from "../types/text";

const initialState: ITextState = {
  text: `Type to left side`,
  mode: "normal",
  example_text,
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changeMode: (state) => {
      state.mode = state.mode === "normal" ? "example" : "normal";
    },
  },
});

export const { changeText, changeMode } = textSlice.actions;

export default textSlice.reducer;
