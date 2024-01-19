import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'

const Header = () => {
  const userloggedIn = useSelector((store: any) => store.user.isLoggedIn)

  const { i18n } = useTranslation()

  const handleLanguageChange = (e: any) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <div className="absolute flex justify-between w-full z-10 py-8 px-10 bg-gradient-to-b from-black">
        <h1 className="opacity-100 text-red-500 text-4xl font-bold font-sans subpixel-antialiased tracking-wider">
          CINESELECT-GPT
        </h1>
        {!userloggedIn ? (
          <div className="bg-red-700 text-white rounded-md flex">
            <span className="font-bold pl-2.5 pr-1 py-2">⎈</span>
            <div className="px-2">
              <select
                className="py-1 pr-1.5 my-1.5 rounded-sm bg-red-700 font-semibold outline-none"
                onChange={(e) => handleLanguageChange(e)}
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </div>
          </div>
        ) : (
          <SearchBar />
        )}
      </div>
    </>
  )
}

export default Header
