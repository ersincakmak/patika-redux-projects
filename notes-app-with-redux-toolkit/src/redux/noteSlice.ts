import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorsType } from "../components/CreateForm";

export type note = {
  color: ColorsType;
  note: string;
};

export type notesState = {
  notes: note[];
  filteredNotes: note[];
  selectedColor: ColorsType;
  filterString: string;
};

const initialState: notesState = {
  notes: [],
  filteredNotes: [],
  selectedColor: "pink",
  filterString: "",
};

const noteSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes.push({
        color: state.selectedColor,
        note: action.payload,
      });
      state.filteredNotes.push({
        color: state.selectedColor,
        note: action.payload,
      });
    },
    setColor: (state, action: PayloadAction<ColorsType>) => {
      state.selectedColor = action.payload;
    },
    setFilteredData: (state, action: PayloadAction<string>) => {
      const regex = new RegExp(action.payload, "i");
      state.filteredNotes = state.notes.filter((item) => regex.test(item.note));
    },
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.filterString = action.payload;
    },
  },
});

export const { addNote, setColor, setFilteredData, setFilterValue } =
  noteSlice.actions;

export default noteSlice.reducer;
