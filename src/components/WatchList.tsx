import React from "react";
import MovieCard from "./MovieCard";

interface WatchlistProps {
  watchlist: any[];
  onRemoveFromWatchlist: (movie: any) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({
  watchlist,
  onRemoveFromWatchlist,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {watchlist.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={onRemoveFromWatchlist}
        />
      ))}
    </div>
  );
};

export default Watchlist;
