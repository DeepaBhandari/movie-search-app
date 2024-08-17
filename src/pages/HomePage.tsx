import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { searchMovies, setQuery } from "../redux/slices/searchSlice";
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} from "../redux/slices/watchListSlice";
import { fetchMovieDetail } from "../redux/slices/movieDetailSlice";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Watchlist from "../components/WatchList";
import MovieDetail from "../components/MovieDetail";
import { Movie } from "../types/movie";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { query, results, status, error } = useAppSelector(
    (state) => state.search
  );
  const watchlist = useAppSelector((state) => state.watchlist.movies);
  const movieDetail = useAppSelector((state) => state.movieDetail.movie);
  const [localQuery, setLocalQuery] = useState(query);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query));
    }
  }, [dispatch, query]);

  const handleSearch = () => {
    dispatch(setQuery(localQuery));
  };

  const handleAddToWatchlist = (movie: Movie) => {
    dispatch(addMovieToWatchlist(movie));
  };

  const handleRemoveFromWatchlist = (id: string) => {
    dispatch(removeMovieFromWatchlist(id));
  };

  const isMovieInWatchlist = (id: string) => {
    return watchlist.some((movie) => movie.imdbID === id);
  };

  const handleViewDetails = (movie: Movie) => {
    dispatch(fetchMovieDetail(movie.imdbID));
    setShowDetail(true);
  };

  const handleCloseDetails = () => {
    setShowDetail(false);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        query={localQuery}
        onQueryChange={setLocalQuery}
        onSearch={handleSearch}
      />
      <div className="space-y-8">
        <div className="flex">
          {/* Movies Row */}
          <div
            className={`w-${
              showDetail ? "2/3" : "full"
            } transition-width duration-300`}
          >
            <h2 className="text-2xl font-bold mb-4">Movies</h2>
            <div className="carousel-container">
              {status === "loading" && <p>Loading...</p>}
              {status === "failed" && <p>{error}</p>}
              {status === "succeeded" && (
                <MovieList
                  movies={results}
                  onAddToWatchlist={handleAddToWatchlist}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                  isMovieInWatchlist={isMovieInWatchlist}
                  onViewDetails={handleViewDetails}
                />
              )}
            </div>
          </div>
          {/* Movie Detail */}
          {showDetail && (
            <div className="w-1/3 transition-width duration-300">
              <button
                onClick={handleCloseDetails}
                className="text-red-500 float-right"
              >
                X
              </button>
              {movieDetail && (
                <MovieDetail
                  movie={movieDetail}
                  onAddToWatchlist={() => handleAddToWatchlist(movieDetail)}
                  isAdded={isMovieInWatchlist(movieDetail.imdbID)}
                />
              )}
            </div>
          )}
        </div>
        {/* Watchlist Row */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
          {watchlist.length > 0 ? (
            <Watchlist
              movies={watchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          ) : (
            <p>No movies in your watchlist</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
