import { createContext, useContext } from "react";

export type Type = "html" | "text";

export type ParagraphContextType = {
  count: number;
  setCount: (number: number) => void;
  type: Type;
  setType: (type: Type) => void;
  data: string[];
  setData: (data: string[]) => void;
};

export const ParagraphContext = createContext<ParagraphContextType>({
  count: 1,
  data: [],
  type: "text",
  setType: () => {},
  setCount: () => {},
  setData: () => {},
});

export const useParagraph = () => useContext(ParagraphContext);
