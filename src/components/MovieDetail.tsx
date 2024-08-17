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
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-2">
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p className="mb-2">
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p className="mb-2">
        <strong>Director:</strong> {movie.Director}
      </p>
      <p className="mb-2">
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p className="mb-2">
        <strong>Released:</strong> {movie.Released}
      </p>
      <p className="mb-4">
        <strong>Rating:</strong> {movie.imdbRating}
      </p>
      <button
        onClick={onAddToWatchlist}
        className={`px-4 py-2 rounded ${
          isAdded ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieDetail;
