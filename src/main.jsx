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
<<<<<<< HEAD
import Contact from './components/Contact/Contact.jsx'
import { Provider } from 'react-redux'
import Content from './components/Content/Content.jsx'
import store from './components/store/store.jsx'
import Management from './components/SideBar/waterManage.jsx/Management.jsx'
import Technique from './components/SideBar/Technique/Technique.jsx'
import Agriculture from './components/SideBar/Agriculture.jsx'
import Industry from './components/SideBar/Industry.jsx'
import Campaigns from './components/SideBar/Campaigns.jsx'
=======
import { Provider } from 'react-redux'
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3


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
<<<<<<< HEAD
        path: "/ask-an-expert",
=======
        path: "/ask an Expert",
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
        element: <Expert/>
      },
      {
        path :"Add Question",
        element: <AddQuestion/>
<<<<<<< HEAD
      },
      {
       path :"/contact",
       element: <Contact/>
      },
      {
        path: "/content",
        element: <Content/>
      },
      {
       path: "/management",
       element: <Management/>
      },{
        path: "/technique",
        element: <Technique/>
      },
      {
        path: "/agriculture",
       element: <Agriculture/>
      },
      {
        path: "/industry",
        element: <Industry/>
      },
      {
        path: "/campaigns",
        element: <Campaigns/>
      },
=======
      }
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
<<<<<<< HEAD
   <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
     
   
   
  </StrictMode>,
)

=======
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
