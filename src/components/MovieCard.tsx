import React from "react";

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
      <button
        onClick={() => onAddToWatchlist(movie)}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default MovieCard;
