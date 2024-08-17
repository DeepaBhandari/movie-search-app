import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlist: [] as any[],
  },
  reducers: {
    addMovieToWatchlist: (state, action) => {
      const movie = action.payload;
      const existingMovie = state.watchlist.find(
        (m) => m.imdbID === movie.imdbID
      );
      if (!existingMovie) {
        state.watchlist.push(movie);
      }
    },
    removeMovieFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } =
  watchlistSlice.actions;
export default watchlistSlice.reducer;
