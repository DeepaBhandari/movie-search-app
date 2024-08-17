import React from "react";
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  isInWatchlist: boolean;
  onAddToWatchlist: () => void;
  onRemoveFromWatchlist: () => void;
  onViewDetails: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  isInWatchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onViewDetails,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={onViewDetails}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Details
          </button>
          {isInWatchlist ? (
            <button
              onClick={onRemoveFromWatchlist}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove from Watchlist
            </button>
          ) : (
            <button
              onClick={onAddToWatchlist}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add to Watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
