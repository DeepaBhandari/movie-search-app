import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import searchReducer from "./slices/searchSlice";
import movieDetailReducer from "./slices/movieDetailSlice";
import watchlistReducer from "./slices/watchListSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    movieDetail: movieDetailReducer,
    watchlist: watchlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
