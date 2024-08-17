import React from "react";
import { MovieDetail as MovieDetailType } from "../types/movie";

interface MovieDetailProps {
  movie: MovieDetailType;
  onAddToWatchlist: () => void;
  isAdded: boolean;
}

const MovieDetail: React.FC<MovieDetailProps> = ({
  movie,
  onAddToWatchlist,
  isAdded,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
      <p className="mb-2">
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p className="mb-2">
        <strong>Released:</strong> {movie.Released}
      </p>
      <p className="mb-2">
        <strong>Director:</strong> {movie.Director}
      </p>
      <p className="mb-2">
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p className="mb-4">
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <button
        className={`px-4 py-2 rounded ${
          isAdded ? "bg-gray-500" : "bg-blue-500"
        } text-white`}
        onClick={onAddToWatchlist}
        disabled={isAdded}
      >
        {isAdded ? "Added to Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieDetail;
