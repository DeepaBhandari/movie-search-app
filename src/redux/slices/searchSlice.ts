import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../types/movie";

interface SearchState {
  query: string;
  results: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  results: [],
  status: "idle",
  error: null,
};

export const searchMovies = createAsyncThunk<Movie[], string>(
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
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
