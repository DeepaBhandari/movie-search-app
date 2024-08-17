import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getMovieDetail } from "../redux/slices/movieDetailSlice";
import MovieDetail from "../components/MovieDetail";
import { addMovieToWatchlist } from "../redux/slices/watchListSlice";

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { movie, status, error } = useAppSelector((state) => state.movieDetail);
  const watchlist = useAppSelector((state) => state.watchlist.movies);

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetail(id));
    }
  }, [dispatch, id]);

  const isMovieInWatchlist = (id: string) => {
    return watchlist.some((movie) => movie.imdbID === id);
  };

  const handleAddToWatchlist = () => {
    if (movie) {
      dispatch(addMovieToWatchlist(movie));
    }
  };

  return (
    <div className="container mx-auto p-4">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && movie && (
        <MovieDetail
          movie={movie}
          onAddToWatchlist={handleAddToWatchlist}
          isAdded={isMovieInWatchlist(movie.imdbID)}
        />
      )}
    </div>
  );
};

export default MovieDetailPage;
