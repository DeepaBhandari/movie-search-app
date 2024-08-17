import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const HomePage: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default HomePage;
