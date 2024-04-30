import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "../images/leela_logo.png"
const Whatsapp = () => {
  return (
    <div>
         <FloatingWhatsApp phoneNumber="+91 8296052669" avatar={logo} statusMessage="Typically replies within 10 mins" accountName="Leela Food Supplies" allowClickAway="true"/>
    </div>
  )
}

export default Whatsapp