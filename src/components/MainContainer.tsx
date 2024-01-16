import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const allMovies = useSelector((store: any) => store?.movies?.nowPlaying)
  if (!allMovies) return null
  const newMovie = allMovies[5]
  const { original_title, overview, id } = newMovie

  return (
    <>
      <VideoTitle title={original_title} desc={overview} />
      <VideoBackground moviedId={id} />
    </>
  )
}

export default MainContainer
