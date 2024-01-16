import { API_URL, OPTIONS } from '../utils/constants'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addMovies } from '../utils/moviesSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  const dispatch = useDispatch()

  const getMovies = async () => {
    const data = await fetch(API_URL, OPTIONS)
    const json = await data.json()
    dispatch(addMovies(json?.results))
  }

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse
