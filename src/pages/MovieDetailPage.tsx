import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchMovieDetail } from "../redux/slices/movieDetailSlice";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const MovieDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { imdbID } = useParams<{ imdbID: string }>();
  const movieDetail = useAppSelector((state) => state.movieDetail.movie);
  const status = useAppSelector((state) => state.movieDetail.status);
  const error = useAppSelector((state) => state.movieDetail.error);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieDetail(imdbID));
    }
  }, [dispatch, imdbID]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {movieDetail ? (
        <MovieDetail
          movie={movieDetail}
          onAddToWatchlist={() => {}}
          isAdded={false}
        />
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
