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
  };

  const handleAddToWatchlistFromDetails = () => {
    if (movieDetail) {
      dispatch(addMovieToWatchlist(movieDetail));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        query={localQuery}
        onQueryChange={setLocalQuery}
        onSearch={handleSearch}
      />
      <div className="space-y-8">
        {/* Movies Row */}
        <div>
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
        {/* Watchlist Row */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
          <Watchlist
            movies={watchlist}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
          />
        </div>
        {/* Movie Detail */}
        {movieDetail && (
          <div className="mt-8">
            <MovieDetail
              movie={movieDetail}
              onAddToWatchlist={handleAddToWatchlistFromDetails}
              isAdded={isMovieInWatchlist(movieDetail.imdbID)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
