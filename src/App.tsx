import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './utils/firebase'
import { addUser, removeUser } from './utils/userSlice'
import Login from './components/Login'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user
        dispatch(addUser({ email: email, uid: uid, displayName: displayName }))
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
  }, [])

  return <Login />
}

export default App
