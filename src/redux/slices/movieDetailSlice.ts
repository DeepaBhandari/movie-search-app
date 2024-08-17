import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieDetail } from "../../types/movie";
import axios from "axios";

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
      `https://www.omdbapi.com/?i=${imdbID}&apikey=4feb8896`
    );
    return response.data;
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    clearMovieDetail: (state) => {
      state.movie = null;
      state.status = "idle";
      state.error = null;
    },
  },
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

export const { clearMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
