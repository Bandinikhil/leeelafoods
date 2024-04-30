import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Clients from './components/Clients'
import Navbar from './CommonComponents/Navbar/Navbar'
import Footer from './components/Footer'
import Horeca from './components/Horeca'

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/about",
    element : <AboutUs/>
  },
  {
    path: "/contact",
  element : <ContactUs/>
  },
  {
    path : "/client",
    element : <Clients/>
  },
  {
    path : "/horeca-food-suppliers",
    element : <Horeca/>
  }
  

])

const App = () => {
  return (
    <div>
     <div className=" max-w-[1900px] mx-auto 2xl:border 2xl:shadow-2xl">
   <RouterProvider router={appRouter}/>
   <Footer/>
   </div>
    </div>
  )
}

export default App