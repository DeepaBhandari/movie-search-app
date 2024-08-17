import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import movieDetailReducer from "./slices/movieDetailSlice";
import watchlistReducer from "./slices/watchListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    movieDetail: movieDetailReducer,
    watchlist: watchlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
