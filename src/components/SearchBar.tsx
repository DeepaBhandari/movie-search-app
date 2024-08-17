import React, { useState } from "react";
import { useAppDispatch } from "../redux/store";
import { searchMovies } from "../redux/slices/searchSlice";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(searchMovies(query));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
