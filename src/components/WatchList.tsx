import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../redux/store";
import { removeMovieFromWatchlist } from "../redux/slices/watchListSlice";
import MovieCard from "./MovieCard";

const WatchList: React.FC = () => {
  const watchList = useSelector((state: RootState) => state.watchlist.movies);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeMovieFromWatchlist(id));
  };

  return (
    <div>
      <h2>Your Watchlist</h2>
      {watchList.length > 0 ? (
        watchList.map((movie: any) => (
          <div key={movie.imdbID}>
            <MovieCard movie={movie} />
            <button onClick={() => handleRemove(movie.imdbID)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No movies in your watchlist.</p>
      )}
    </div>
  );
};

export default WatchList;
