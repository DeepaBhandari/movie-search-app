import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieDetail } from "../../types/movie";

interface MovieDetailState {
  movie: MovieDetail | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  status: "idle",
  error: null,
};

export const fetchMovieDetail = createAsyncThunk(
  "movieDetail/fetchMovieDetail",
  async (imdbID: string) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=4feb8896`
    );
    return response.data as MovieDetail;
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch movie details";
      });
  },
});

export default movieDetailSlice.reducer;
