import React, { useEffect, useState } from "react";
import { useParagraph } from "../../context/paragraphContext";
import copy from "copy-to-clipboard";

const Control = () => {
  const { count, type, setCount, setType, data } = useParagraph();

  const [isCopied, setisCopied] = useState(false);

  useEffect(() => {
    if (isCopied === true) {
      setTimeout(() => {
        setisCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <div className="container mx-auto mt-4 flex gap-5">
      <label className="flex flex-col text-white gap-2">
        Paragraphs
        <input
          type="number"
          min={1}
          value={count}
          className="ring-white rounded p-2 border-none outline-none text-black"
          onChange={(e) => {
            if (Number(e.currentTarget.value) < 0) {
              setCount(0);
            } else {
              setCount(Number(e.currentTarget.value));
            }
          }}
        />
      </label>

      <label className="flex flex-col text-white gap-2">
        Include Html
        <select
          name="type"
          defaultValue={type}
          value={type}
          onChange={(e) => setType(e.currentTarget.value as any)}
          className="rounded p-2 border-none outline-none text-black"
        >
          <option value="html">Html</option>
          <option value="text">Text</option>
        </select>
      </label>

      <button
        className="bg-white flex-shrink h-10 self-end rounded p-2 w-52"
        onClick={() => {
          copy(data.join(" "));
          setisCopied(true);
        }}
      >
        {isCopied === false ? "Copy To Clipboard" : "Copied ✔️"}
      </button>
    </div>
  );
};

export default Control;
