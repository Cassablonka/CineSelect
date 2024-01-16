import { createBrowserRouter } from 'react-router-dom'
import Browse from '../components/Browse'
import App from '../App'

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'browse',
    element: <Browse />,
  },
])
