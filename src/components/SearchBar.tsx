import { useRef } from 'react'
import { openai } from '../utils/openai'
import { useDispatch } from 'react-redux'
import { gptSearchResult, searchMovies } from '../utils/gptSlice'
import { OPTIONS } from '../utils/constants'
import { useTranslation } from 'react-i18next'

const SearchBar = () => {
  const dispatch = useDispatch()
  const recommendationSearch = useRef<HTMLInputElement>(null)
  const {t} = useTranslation()

  const searchMovie = async (movie: string) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      OPTIONS,
    )
    const json = await data.json()
    return json.results
  }

  const handleSearch = async () => {
    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query: ' +
      recommendationSearch?.current?.value +
      '. only suggest me names of 5 movies, comma separated like the example format given ahead. Example Result: a, b, c, d, e'
    const result = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    })

    const moviesResult = result?.choices[0]?.message?.content?.split(',')
    const searchedMovies: any = moviesResult?.map((movie) => searchMovie(movie))

    const tmdbResults = await Promise.all(searchedMovies)
    dispatch(gptSearchResult({ movieNames: moviesResult, movies: tmdbResults }))
    dispatch(searchMovies())
  }
  return (
    <>
      <div className="rounded-md text-white font-semibold">
        <input
          ref={recommendationSearch}
          type="text"
          className="outline-none font-normal px-6 py-1 my-1.5 mx-1.5 rounded-md placeholder-slate-400 text-black"
          placeholder={t('searchGpt.placeholder')}
        />
        <button
          className="mx-2 border-2 px-2 py-0.5 rounded-md bg-red-700 hover:border-white hover:bg-black border-red-700 hover:text-white"
          onClick={handleSearch}
        >
          {t('searchGpt.searchBtn')}
        </button>
      </div>
    </>
  )
}

export default SearchBar
