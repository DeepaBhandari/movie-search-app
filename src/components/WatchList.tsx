import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

interface WatchlistProps {
  movies: Movie[];
  onRemoveFromWatchlist: (id: string) => void;
  onViewDetails: (movie: Movie) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({
  movies,
  onRemoveFromWatchlist,
  onViewDetails,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isInWatchlist={true}
          onAddToWatchlist={() => {}}
          onRemoveFromWatchlist={() => onRemoveFromWatchlist(movie.imdbID)}
          onViewDetails={() => onViewDetails(movie)}
        />
      ))}
    </div>
  );
};

export default Watchlist;
