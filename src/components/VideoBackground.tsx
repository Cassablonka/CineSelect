import React, { useEffect } from 'react'
import { OPTIONS, VIDEOS_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/moviesSlice'

const VideoBackground = ({ moviedId }: any) => {
  const dispatch = useDispatch()
  const trailer = useSelector((store: any) => store?.movies?.trailer)
  const getMovieVideos = async () => {
    const data = await fetch(VIDEOS_API + moviedId + '/videos', OPTIONS)
    const json = await data.json()
    const filteredData = json.results.filter(
      (video: any) => video.type === 'Trailer',
    )
    const trailer = filteredData[1]
    console.log('==tr', trailer)

    dispatch(addTrailer(trailer))
  }
  useEffect(() => {
    getMovieVideos()
  }, [])

  if (!trailer) return null

  const { key } = trailer

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={'https://www.youtube.com/embed/' + key + '?autoplay=1&mute=1&controls=0&&showinfo=0&loop=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground
