import React from 'react'
import Navbar from '../CommonComponents/Navbar/Navbar'
import {Email} from "../CommonComponents/Emailjs/Email"
import Contactinfo from './Coonninfo'
import Whatsapp from './Whatsapp'
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Leela Food Supplies</title>
        <meta name="description" content="Contact Leela Food Supplies for quality wholesale groceries. Reach us at +8296052669 or lalitha@leelafoods.co.in. Visit our location at Sharada Towers, Bengaluru. Elevate your culinary experience with Leela Food Supplies today" />
      </Helmet>
         <Navbar reloadnavbar={false}/>
         <div className='p-5 lg:mx-12'>
         <div className='flex flex-col xl:flex-row items-center justify-between xl:justify-between'>
          <Email/>
            <Contactinfo/>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3013.0738446377673!2d77.59945396573268!3d13.002370846941254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzA4LjciTiA3N8KwMzUnNTcuNiJF!5e0!3m2!1sen!2sin!4v1703789597777!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
<div className='mt-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3013.0738446377673!2d77.59945396573268!3d13.002370846941254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzA4LjciTiA3N8KwMzUnNTcuNiJF!5e0!3m2!1sen!2sin!4v1703789597777!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Whatsapp/>
            </div>
          </>
   
  )
}

export default ContactUs