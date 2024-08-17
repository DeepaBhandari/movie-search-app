import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMovieDetail } from "../redux/slices/movieDetailSlice";
import { addMovieToWatchlist } from "../redux/slices/watchListSlice";
import { useAppDispatch, RootState } from "../redux/store";
import { Movie } from "../types/movie";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const movie = useSelector(
    (state: RootState) => state.movieDetail.movie
  ) as Movie | null;

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetail(id));
    }
  }, [dispatch, id]);

  const handleAddToWatchlist = () => {
    if (movie) {
      dispatch(addMovieToWatchlist(movie));
    }
  };

  return movie ? (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
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
      <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetail;
