import axios from "axios";
import { useEffect, useState } from "react";
import Content from "./components/Content/intex";
import Control from "./components/Control";
import Header from "./components/Header";
import { ParagraphContext, Type } from "./context/paragraphContext";

function App() {
  const [count, setCount] = useState(1);
  const [type, setType] = useState<Type>("text");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get<string>(
        `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${type}`
      );
      setData(data.trim().split("\n"));
    };

    fetch();
  }, [type, count]);

  return (
    <div className="w-screen h-screen bg-gray-900">
      <ParagraphContext.Provider
        value={{
          count,
          data,
          type,
          setCount,
          setData,
          setType,
        }}
      >
        <Header />
        <Control />
        <Content />
      </ParagraphContext.Provider>
    </div>
  );
}

export default App;
