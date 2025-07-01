import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Pages/index.jsx'
import ProjectsPage from './Pages/projects.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/projects", element: <ProjectsPage /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
