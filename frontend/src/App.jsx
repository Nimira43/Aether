import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages'
import Layout from './pages/Layout'
import Home from './components/Home'
import Templates from './components/Templates'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/templates',
        element: <Templates />,
      },

    ]
  }
])

function App() {
  return ( 
    <RouterProvider router={router} />
  )
}
 
export default App