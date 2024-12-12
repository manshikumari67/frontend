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
import Contact from './components/Contact/Contact.jsx'
import { Provider } from 'react-redux'
import Content from './components/Content/Content.jsx'
import store from './components/store/store.jsx'
import Management from './components/SideBar/waterManage.jsx/Management.jsx'
import Agriculture from './components/SideBar/Agriculture.jsx'
import Industry from './components/SideBar/Industry.jsx'
import Campaigns from './components/SideBar/Campaigns.jsx'
import Donate from './components/Donate/Donate.jsx'
import Login from './Login.jsx'
import Reuse from './components/SideBar/Reuse.jsx'
import WasteWater from './components/SideBar/WasteWater.jsx'
import Sustanibility from './components/SideBar/Sustanibility.jsx'
import Signup from './SignUp.jsx'
import Soil from './components/SideBar/Soil.jsx'
import Profile from './components/DashBoard/Profile.jsx'
import Locator from './components/DashBoard/Locator.jsx'
import Calculator from './components/DashBoard/calculator.jsx'
import PaymentStatus from './components/Donate/PaymentStatus.jsx'



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
        path: "/ask-an-expert",
        element: <Expert/>
      },
      {
        path :"Add Question",
        element: <AddQuestion/>
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
      {
        path: "/donate",
        element: <Donate/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
       path:"/reuse",
       element :<Reuse/>
      },
      {
       path: "/wastewater",
       element: <WasteWater/>
      },
      {
       path: "/sustain",
       element : <Sustanibility/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/soil",
        element: <Soil/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
       path:"/locator",
       element:<Locator/>
      },
      {
        path: "/calculator",
        element: <Calculator/>
      },
      {
       path: "/paymentStatus",
       element: <PaymentStatus/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
     
   
   
  </StrictMode>,
)

