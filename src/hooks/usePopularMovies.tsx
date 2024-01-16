import { useDispatch } from 'react-redux'
import { OPTIONS, POPULAR_MOVIES_API } from '../utils/constants'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const usePopularMovies = () => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, OPTIONS)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }
  useEffect(() => {
    getMovies()
  })
}
