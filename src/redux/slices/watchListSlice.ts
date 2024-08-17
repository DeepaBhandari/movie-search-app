import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: JSON.parse(localStorage.getItem("watchlist") || "[]"),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovieToWatchlist: (state, action) => {
      state.movies.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.movies));
    },
    removeMovieFromWatchlist: (state, action) => {
      state.movies = state.movies.filter(
        (movie: { imdbID: any }) => movie.imdbID !== action.payload
      );
      localStorage.setItem("watchlist", JSON.stringify(state.movies));
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } =
  watchlistSlice.actions;
export default watchlistSlice.reducer;
