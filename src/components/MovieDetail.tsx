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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <p className="mt-2">{movie.Plot}</p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.Released}
      </p>
      <button
        onClick={onAddToWatchlist}
        className={`mt-4 px-4 py-2 rounded-lg ${
          isAdded ? "bg-gray-500" : "bg-green-500"
        } text-white`}
        disabled={isAdded}
      >
        {isAdded ? "Added" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieDetail;
