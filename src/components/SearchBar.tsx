import React, { useState } from "react";
interface Props {}

const SearchBar: React.FC<Props> = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit"> Search</button>
    </form>
  );
};

export default SearchBar;
