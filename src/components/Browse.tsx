import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const Browse = () => {

  useNowPlayingMovies()
  
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
