import { useDispatch } from 'react-redux'
import { API_URL, OPTIONS } from '../utils/constants'
import { addMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch(API_URL, OPTIONS)
    const json = await data.json()
    dispatch(addMovies(json.results))
  }
  useEffect(() => {
    getMovies()
  })
}
