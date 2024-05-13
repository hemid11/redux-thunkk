import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => 'movies',
    }),
    deleteMovie: builder.mutation({
      query: (movieId) => ({
        url: `movies/${movieId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useDeleteMovieMutation } = moviesApi;
