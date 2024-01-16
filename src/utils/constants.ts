export const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1'

export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZiYmEzNzU1ZWZkNzA0NGNjMTllZjYzNTFjNzY0MiIsInN1YiI6IjY1YTJkYzAzMjk3MzM4MDEyMTEyZjljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJFtxIX5oFhnA8ObszI6TXIK-yCsaRQpvuEZ91jFE_Q',
  },
}

export const VIDEOS_API = 'https://api.themoviedb.org/3/movie/'

export const POPULAR_MOVIES_API =
  'https://api.themoviedb.org/3/movie/popular?page=1'

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const TOP_RATED_MOVIES_API =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

export const FUTURE_RELEASE =
  'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
