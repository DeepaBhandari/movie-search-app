import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux//store";
import { addMovieToWatchlist } from "../redux/slices/watchListSlice";

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();

  const handleAddToWatchlist = () => {
    dispatch(addMovieToWatchlist(movie));
  };

  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
