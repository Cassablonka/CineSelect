import { useDispatch } from 'react-redux'
import { OPTIONS, TOP_RATED_MOVIES_API } from '../utils/constants'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const useTopRatedMovies = () => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, OPTIONS)
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(() => {
    getMovies()
  })
}
