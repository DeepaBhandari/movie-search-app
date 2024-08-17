import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getMovieDetail } from "../redux/slices/movieDetailSlice";
import { addMovieToWatchlist } from "../redux/slices/watchListSlice";
import MovieDetail from "../components/MovieDetail";

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movieDetail.movie);

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

  return (
    <div>
      {movie && (
        <MovieDetail movie={movie} onAddToWatchlist={handleAddToWatchlist} />
      )}
    </div>
  );
};

export default MovieDetailPage;
