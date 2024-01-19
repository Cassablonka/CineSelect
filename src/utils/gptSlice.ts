import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    gptSearch: false,
    movieNames: null,
    movies: null,
  },
  reducers: {
    searchMovies: (state) => {
      state.gptSearch = true
    },
    gptSearchResult: (state, action) => {
      const { movieNames, movies } = action.payload
      state.movieNames = movieNames
      state.movies = movies
    },
  },
})

export const { searchMovies, gptSearchResult } = gptSlice.actions
export default gptSlice.reducer
