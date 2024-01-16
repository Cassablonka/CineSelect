import { useSelector } from 'react-redux'
import MenuList from './MenuList'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store: any) => store?.movies?.nowPlaying,
  )

  const popularMovies = useSelector((store: any) => store?.movies?.popular)

  const topRatedMovies = useSelector((store: any) => store?.movies?.topRated)

  const futureReleaseMovies = useSelector(
    (store: any) => store?.movies?.futureRelease,
  )

  if (
    !nowPlayingMovies ||
    !popularMovies ||
    !topRatedMovies ||
    !futureReleaseMovies
  )
    return null
  return (
    <>
      {nowPlayingMovies && (
        <div className="-mt-32 relative z-20">
          <MenuList title={'Now Playing'} movies={nowPlayingMovies} />
          <MenuList title={'Popular'} movies={popularMovies} />
          <MenuList title={'Top Rated'} movies={topRatedMovies} />
          <MenuList title={'Future Release'} movies={futureReleaseMovies} />
        </div>
      )}
    </>
  )
}

export default SecondaryContainer
