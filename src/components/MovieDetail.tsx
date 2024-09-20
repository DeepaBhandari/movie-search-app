import React from "react";
import { MovieDetail as MovieDetailType } from "../types/movie";

interface MovieDetailProps {
  movie: MovieDetailType;
  onAddToWatchlist: () => void;
  isAdded: boolean;
  onClose?: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({
  movie,
  onAddToWatchlist,
  isAdded,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{movie.Title}</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            X
          </button>
        )}
      </div>
      <p className="mb-4">{movie.Plot}</p>
      <p className="mb-2">Released: {movie.Released}</p>
      <p className="mb-2">Genre: {movie.Genre}</p>
      <p className="mb-2">IMDB Rating: {movie.imdbRating}</p>
      <button
        onClick={onAddToWatchlist}
        className={`mt-4 px-4 py-2 rounded ${
          isAdded ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
        disabled={isAdded}
      >
        {isAdded ? "In Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieDetail;
