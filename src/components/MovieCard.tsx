import React from "react";
import type { Movie } from "../types/movie";
interface MovieCardProps {
  movie: Movie;
  isAdded: boolean;
  onAddToWatchlist: () => void;
  onRemoveFromWatchlist: () => void;
  onViewDetails: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  isAdded,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onViewDetails,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
      <p className="mb-4 text-gray-600">{movie.Year}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={onViewDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View Details
        </button>
        {isAdded ? (
          <button
            onClick={onRemoveFromWatchlist}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Remove from Watchlist
          </button>
        ) : (
          <button
            onClick={onAddToWatchlist}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
