import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { removeMovieFromWatchlist } from "../redux/slices/watchListSlice";
import {
  fetchMovieDetail,
  clearMovieDetail,
} from "../redux/slices/movieDetailSlice";
import Watchlist from "../components/WatchList";
import MovieDetail from "../components/MovieDetail";
import { Movie } from "../types/movie";

const WatchListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.movies);
  const movieDetail = useAppSelector((state) => state.movieDetail.movie);

  const handleRemoveFromWatchlist = (id: string) => {
    dispatch(removeMovieFromWatchlist(id));
  };

  const handleViewDetails = (movie: Movie) => {
    dispatch(fetchMovieDetail(movie.imdbID));
  };

  const handleCloseDetails = () => {
    dispatch(clearMovieDetail());
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <div className={`col-span-12 ${movieDetail ? "md:col-span-8" : ""}`}>
            <Watchlist
              movies={watchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
              onViewDetails={handleViewDetails}
            />
          </div>
          {movieDetail && (
            <div className="col-span-12 md:col-span-4">
              <MovieDetail
                movie={movieDetail}
                onAddToWatchlist={() => {}}
                isAdded={true}
                onClose={handleCloseDetails}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WatchListPage;
