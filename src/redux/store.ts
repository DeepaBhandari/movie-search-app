import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import movieDetailReducer from "./slices/movieDetailSlice";
import watchlistReducer from "./slices/watchListSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    search: searchReducer,
    movieDetail: movieDetailReducer,
    watchlist: watchlistReducer,
  },
});

store.subscribe(() => {
  const watchlist = store.getState().watchlist;
  localStorage.setItem("watchlist", JSON.stringify(watchlist.movies));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
