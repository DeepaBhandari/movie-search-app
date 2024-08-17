import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";

interface WatchlistState {
  movies: Movie[];
}

const initialState: WatchlistState = {
  movies: JSON.parse(localStorage.getItem("watchlist") || "[]"),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovieToWatchlist(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const existingMovie = state.movies.find((m) => m.imdbID === movie.imdbID);
      if (!existingMovie) {
        state.movies.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(state.movies)); // Save to local storage
      }
    },
    removeMovieFromWatchlist(state, action: PayloadAction<string>) {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      localStorage.setItem("watchlist", JSON.stringify(state.movies)); // Save to local storage
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } =
  watchlistSlice.actions;
export default watchlistSlice.reducer;
