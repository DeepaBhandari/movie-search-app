import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { addMovieToWatchlist } from "../redux/slices/watchListSlice";

const Home: React.FC = () => {
  const { results } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const handleAddToWatchlist = (movie: any) => {
    dispatch(addMovieToWatchlist(movie));
  };

  return (
    <div>
      <SearchBar />
      <MovieList movies={results} onAddToWatchlist={handleAddToWatchlist} />
    </div>
  );
};

export default Home;
