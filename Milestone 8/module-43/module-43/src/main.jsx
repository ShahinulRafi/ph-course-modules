import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import About from './components/about/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'about', Component: About},
      {path: 'contact', Component: Contact},
      {path: 'laptops', Component: Laptops}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
