import React, { useState } from "react";
import { useAppDispatch } from "../redux/store";
import { searchMovies } from "../redux/slices/searchSlice";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(searchMovies(query));
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="flex-grow p-2 border border-gray-300 rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
