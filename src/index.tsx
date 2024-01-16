import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes'
import { Provider } from 'react-redux'
import appStore from './utils/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRoutes} />
  </Provider>,
)
