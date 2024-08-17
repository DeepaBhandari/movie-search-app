import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies } from "../../api/movieApi";

export const searchMovies = createAsyncThunk(
  "movies/search",
  async (query: string) => {
    const response = await fetchMovies(query);
    return response.Search; // Assuming API returns a 'Search' array
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: { movies: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default searchSlice.reducer;
