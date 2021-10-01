export interface ICard {
  id: number;
  content: string;
  flipped: boolean;
  matched: boolean;
}

export interface ICardState {
  data: ICard[];
  move: number;
  selected: ICard[];
  score: number;
  isGameEnd: boolean;
}
