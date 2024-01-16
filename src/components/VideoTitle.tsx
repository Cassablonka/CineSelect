const VideoTitle = ({ title, desc }: any) => {
  return (
    <div className="absolute text-white">
        <div className="py-[20%] px-[5%]">
        <p className="text-6xl font-bold">{title}</p>
      <p className='w-1/4 py-4'>{desc}</p>
      <button className="bg-gray-500 px-6 py-2 bg-opacity-50 rounded-md font-semibold">▶︎ Play</button>
      <button className="bg-gray-500 px-6 py-2 bg-opacity-50 mx-2 rounded-md">✚ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
