import { useRef, useState } from 'react'
import { validateFields } from '../utils'

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [errMessage, setErrMessage] = useState('')
  const handleSignUp = () => {
    setIsSignedIn(!isSignedIn)
  }

  let email = useRef<HTMLInputElement>(null)
  let password = useRef<HTMLInputElement>(null)
  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault()
    const message = validateFields(
      email?.current?.value as string,
      password?.current?.value as string,
    )
    setErrMessage(message as string)
  }
  return (
    <>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <div className="absolute bg-gradient-to-b from-black">
        <h1 className="p-7 opacity-100 text-red-600 text-4xl font-bold font-sans subpixel-antialiased tracking-wider">
          CINESELECT
        </h1>
      </div>
      <div className="absolute w-1/4 mx-auto left-0 right-0 my-32 bg-black py-8 px-12 rounded-md bg-opacity-80">
        <form action="">
          <h1 className="text-white text-4xl my-5">
            {isSignedIn ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignedIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full my-2 bg-zinc-700 font-light py-3 px-4 outline-none text-white  placeholder-zinc-400 rounded-md"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="w-full my-2 bg-zinc-700 font-light py-3 px-4 outline-none text-white  placeholder-zinc-400 rounded-md"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full my-2 bg-zinc-700 font-light py-3 px-4 outline-none text-white  placeholder-zinc-400 rounded-md"
          />
          <p className="text-red-600">{errMessage}</p>
          <button
            type="submit"
            onClick={handleLoginClick}
            className="w-full bg-red-600 text-white my-8 p-2 text-lg rounded-md"
          >
            {isSignedIn ? 'Sign In' : 'Sign Up'}
          </button>
          {isSignedIn ? (
            <p className="text-zinc-400 mt-4">
              New to CineSelect ?{' '}
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={handleSignUp}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-zinc-400 mt-4">
              Already registered ?{' '}
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={handleSignUp}
              >
                Sign in now.
              </span>
            </p>
          )}
        </form>
      </div>
    </>
  )
}

export default Login
