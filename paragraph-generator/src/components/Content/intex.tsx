import React, { useEffect } from "react";
import { useParagraph } from "../../context/paragraphContext";

const Content = () => {
  const { data } = useParagraph();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container mx-auto mt-3">
      <p className="p-3 bg-white mt-2 rounded">
        {data.map((item) => (
          <>
            {item}
            <br />
          </>
        ))}
      </p>
    </div>
  );
};

export default Content;
