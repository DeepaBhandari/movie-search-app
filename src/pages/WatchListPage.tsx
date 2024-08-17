import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { removeMovieFromWatchlist } from "../redux/slices/watchListSlice";
import Watchlist from "../components/WatchList";

const WatchlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.watchlist.movies);

  const handleRemoveFromWatchlist = (id: string) => {
    dispatch(removeMovieFromWatchlist(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Watchlist</h1>
      <Watchlist
        movies={movies}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
      />
    </div>
  );
};

export default WatchlistPage;
