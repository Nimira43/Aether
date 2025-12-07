import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages'
import Layout from './pages/Layout'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
])

function App() {
  return ( 
    <RouterProvider router={router} />
  )
}
 
export default App