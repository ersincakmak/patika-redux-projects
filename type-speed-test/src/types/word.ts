export interface WordState {
  words: string[];
  time: number;
  selectedIndex: number;
  timerStart: "idle" | "started" | "stoped";
  totalKeyPress: number;
  wrongKeyPress: number;
  selectionWrong: boolean;
  wrongIndexes: number[];
  rightIndexes: number[];
  inputValue: string;
}
