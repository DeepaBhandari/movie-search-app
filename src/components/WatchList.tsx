import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

interface WatchlistProps {
  movies: Movie[];
  onRemoveFromWatchlist: (id: string) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({
  movies,
  onRemoveFromWatchlist,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={() => {}}
          onRemoveFromWatchlist={() => onRemoveFromWatchlist(movie.imdbID)}
          isAdded={true}
          onViewDetails={() => {}}
        />
      ))}
    </div>
  );
};

export default Watchlist;
