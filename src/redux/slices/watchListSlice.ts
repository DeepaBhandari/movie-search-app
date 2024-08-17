import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";

interface WatchlistState {
  movies: Movie[];
}

const initialState: WatchlistState = {
  movies: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovieToWatchlist(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
    removeMovieFromWatchlist(state, action: PayloadAction<string>) {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;
