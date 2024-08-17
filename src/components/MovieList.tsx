import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

interface MovieListProps {
  movies: Movie[];
  onAddToWatchlist: (movie: Movie) => void;
  onRemoveFromWatchlist: (id: string) => void;
  isMovieInWatchlist: (id: string) => boolean;
  onViewDetails: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isMovieInWatchlist,
  onViewDetails,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isInWatchlist={isMovieInWatchlist(movie.imdbID)}
          onAddToWatchlist={() => onAddToWatchlist(movie)}
          onRemoveFromWatchlist={() => onRemoveFromWatchlist(movie.imdbID)}
          onViewDetails={() => onViewDetails(movie)}
        />
      ))}
    </div>
  );
};

export default MovieList;
