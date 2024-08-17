import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import Watchlist from "../components/WatchList";
import { removeMovieFromWatchlist } from "../redux/slices/watchListSlice";

const WatchlistPage: React.FC = () => {
  const { watchlist } = useAppSelector((state) => state.watchlist);
  const dispatch = useAppDispatch();

  const handleRemoveFromWatchlist = (movie: any) => {
    dispatch(removeMovieFromWatchlist(movie.imdbID));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Watchlist</h2>
      <Watchlist
        watchlist={watchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
      />
    </div>
  );
};

export default WatchlistPage;
