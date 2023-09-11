import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Search from './screens/Search'
import Movies from './screens/Movies'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
    
  },
  {
    path:"/search",
    element: <Search/>
  },
  {
    path:"/movie/:id",
    element: <Movies/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>    
    <RouterProvider router={router} />       
  </React.StrictMode>,
)
