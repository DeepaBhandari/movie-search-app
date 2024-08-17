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

export const getMovieDetail = createAsyncThunk<MovieDetail, string>(
  "movieDetail/getMovieDetail",
  async (id: string) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=4feb8896&i=${id}`
    );
    return response.data;
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default movieDetailSlice.reducer;
