import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useFutureReleaseMovies } from '../hooks/useFutureReleaseMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useFutureReleaseMovies()
  useTopRatedMovies()
  const searchFlag = useSelector((store: any) => store?.gpt?.gptSearch)
  return (
    <>
      <Header />
      {searchFlag ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  )
}

export default Browse
