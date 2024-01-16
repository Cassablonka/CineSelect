import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from './utils/firebase'
import { addUser, removeUser } from './utils/userSlice'
import Login from './components/Login'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user
        dispatch(addUser({ email: email, uid: uid, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
  }, [])

  return <Login />
}

export default App
