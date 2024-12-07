import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Expert from './components/Expert/Expert'
import AddQuestion from './components/AddQuestion/AddQuestion'
import { Provider } from 'react-redux'


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "/ask an Expert",
        element: <Expert/>
      },
      {
        path :"Add Question",
        element: <AddQuestion/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
