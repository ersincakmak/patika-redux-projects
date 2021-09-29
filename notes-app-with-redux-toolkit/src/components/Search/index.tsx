import React, { useEffect, useState } from "react";
import { setFilteredData, setFilterValue } from "../../redux/noteSlice";
import { useAppDispatch } from "../../redux/store";

interface Props {}

const Search = (props: Props) => {
  const dispatch = useAppDispatch();

  const [filterKey, setfilterKey] = useState("");

  const handleFilter = () => {
    dispatch(setFilteredData(filterKey.trim()));
    dispatch(setFilterValue(filterKey.trim()));
  };

  useEffect(() => {
    handleFilter();
  }, [filterKey]);

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 w-80 border-gray-400 rounded-full pl-4 outline-none focus:ring-2 ring-offset-0 ring-gray-500 focus:border-gray-500 mt-5 transition"
        onInput={(e) => setfilterKey(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
