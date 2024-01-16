import { useDispatch } from 'react-redux'
import { FUTURE_RELEASE, OPTIONS } from '../utils/constants'
import { addFutureReleaseMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const useFutureReleaseMovies = () => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch(FUTURE_RELEASE, OPTIONS)
    const json = await data.json()
    dispatch(addFutureReleaseMovies(json.results))
  }
  useEffect(() => {
    getMovies()
  })
}
