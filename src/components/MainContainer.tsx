import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useFutureReleaseMovies } from '../hooks/useFutureReleaseMovies'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'

const MainContainer = () => {
  usePopularMovies()
  useFutureReleaseMovies()
  useTopRatedMovies()
  const allMovies = useSelector((store: any) => store?.movies?.nowPlaying)
  
  if (!allMovies) return null
  const newMovie = allMovies[8]
  const { original_title, overview, id } = newMovie

  return (
    <>
      <VideoTitle title={original_title} desc={overview} />
      <VideoBackground moviedId={id} />
    </>
  )
}

export default MainContainer
