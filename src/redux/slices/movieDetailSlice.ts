import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../types/movie";

interface MovieDetailState {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  loading: false,
  error: null,
};

export const getMovieDetail = createAsyncThunk(
  "movieDetail/getMovieDetail",
  async (id: string) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=your_api_key_here&i=${id}`
    );
    return response.data as Movie;
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movie details";
      });
  },
});

export default movieDetailSlice.reducer;
