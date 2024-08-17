import React from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: any;
  onAddToWatchlist: (movie: any) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onAddToWatchlist }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p className="text-gray-700">{movie.Year}</p>
      <div className="flex justify-between mt-4">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
        <button
          onClick={() => onAddToWatchlist(movie)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
