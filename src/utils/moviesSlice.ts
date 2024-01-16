import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlaying: null,
    trailer: null,
    popular: null,
    topRated: null,
    futureRelease: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload
    },
    addFutureReleaseMovies: (state, action) => {
      state.futureRelease = action.payload
    },
  },
})

export const {
  addMovies,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addFutureReleaseMovies,
} = moviesSlice.actions
export default moviesSlice.reducer
