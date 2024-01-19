import { useSelector } from 'react-redux'
import MenuList from './MenuList'

const GptSearchPage = () => {
  const { movieNames, movies } = useSelector((store: any) => store?.gpt)
  if (!movies) return null

  return (
    <>
      <div className="fixed overflow-x-scroll">
        <img
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <div className="mx-10 my-32 absolute w-11/12 opacity-90">
        {movieNames?.map((movieName: any, index: any) => (
          <MenuList key={movieName} title={movieName} movies={movies[index]} />
        ))}
      </div>
    </>
  )
}

export default GptSearchPage
