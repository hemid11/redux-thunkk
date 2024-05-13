import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { moviesApi } from './moviesApi';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await moviesApi.getMovies();
  return response.data;
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (movieId) => {
  await moviesApi.deleteMovie(movieId);
  return movieId;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const selectAllMovies = (state) => state.movies.movies;

export default moviesSlice.reducer;
