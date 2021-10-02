import ReactMarkdown from "react-markdown";
import { useAppSelector } from "../../redux/store";
import "./index.scss";

const Output = () => {
  const { text, example_text, mode } = useAppSelector((state) => state.text);

  return (
    <ReactMarkdown className="output">
      {mode === "example" ? example_text : text}
    </ReactMarkdown>
  );
};

export default Output;
