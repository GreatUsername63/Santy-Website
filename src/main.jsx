import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Pages/index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/projects", element: <Index /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
