import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes'
import { Suspense } from 'react';
const App = () => {
  return (
    <>
    <Suspense fallback="loading">
    <RouterProvider router={appRoutes} />
    </Suspense>
    </>
  )
  
}

export default App
