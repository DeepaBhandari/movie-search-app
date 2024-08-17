import React from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: any[];
  onAddToWatchlist: (movie: any) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onAddToWatchlist }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
        />
      ))}
    </div>
  );
};

export default MovieList;
