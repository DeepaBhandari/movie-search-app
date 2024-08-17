import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface SearchState {
  query: string;
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (query: string) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=4feb8896&s=${query}`
    );
    return response.data.Search;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload || [];
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export default searchSlice.reducer;
