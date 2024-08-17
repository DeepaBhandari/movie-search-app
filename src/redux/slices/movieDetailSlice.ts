import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export interface MovieDetail {
  Title: string;
  Poster: string;
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Released: string;
}
interface MovieDetailState {
  movie: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  loading: false,
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
        state.loading = true;
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
