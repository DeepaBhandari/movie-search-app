import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { searchMovies, setQuery } from "../redux/slices/searchSlice";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Watchlist from "../components/WatchList";
import MovieDetail from "../components/MovieDetail";
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} from "../redux/slices/watchListSlice";
import { Movie, MovieDetail as MovieDetailType } from "../types/movie";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { query, results, status, error } = useAppSelector(
    (state) => state.search
  );
  const watchlist = useAppSelector((state) => state.watchlist.movies);
  const [localQuery, setLocalQuery] = useState(query);
  const [viewingDetails, setViewingDetails] = useState<MovieDetailType | null>(
    null
  );

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
    const movieDetail = results.find(
      (result) => result.imdbID === movie.imdbID
    ) as MovieDetailType;
    setViewingDetails(movieDetail);
  };

  const handleAddToWatchlistFromDetails = () => {
    if (viewingDetails) {
      dispatch(addMovieToWatchlist(viewingDetails));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        query={localQuery}
        onQueryChange={setLocalQuery}
        onSearch={handleSearch}
      />
      <div className="flex">
        <div className="w-full md:w-2/3 pr-4">
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
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mt-8">Watchlist</h2>
          <Watchlist
            movies={watchlist}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
          />
          {viewingDetails && (
            <MovieDetail
              movie={viewingDetails}
              onAddToWatchlist={handleAddToWatchlistFromDetails}
              isAdded={isMovieInWatchlist(viewingDetails.imdbID)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
