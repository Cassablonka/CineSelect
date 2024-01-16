import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useFutureReleaseMovies } from '../hooks/useFutureReleaseMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useFutureReleaseMovies()
  useTopRatedMovies()
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse
