import React from 'react'
import Navbar from '../CommonComponents/Navbar/Navbar'
import BannerSlider from '../CommonComponents/Banners/BannerSlider'
import HomeCategories from '../CommonComponents/Category/HomeCategories'
import Clients from './Clients'
import Footer from './Footer'
import Whatsapp from './Whatsapp'
import Homeabout from '../CommonComponents/Homeabout'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Leela Food Supplies</title>
        <meta name="description" content="Discover quality wholesale groceries at Leela Food Supplies – your premier HORECA food supplier. From fresh meat to seafood, explore our extensive range for your business success!" />
      </Helmet>
    <div className="">
        <Navbar reloadnavbar={false}/> 
        <BannerSlider/>
        <HomeCategories/>
        <Clients/>
        <Homeabout/>   
        <Whatsapp/>
   
    </div>
    </>
  )
}

export default Home

// 3xl:mx-40