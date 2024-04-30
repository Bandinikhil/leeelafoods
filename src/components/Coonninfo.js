import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contactinfo = () => {
  return (
    <>
    <div className='flex flex-wrap items-start justify-start md:items-center md:justify-around gap-14'>


    <div className='flex flex-row items-center justify-between gap-3'>
            <div className=''><FaPhone size={40}/></div>
            <div className=''>
            <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Phone :
                  </h1>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>+ 8296052669</p>
                
            </div>
        </div>


    <div className='flex flex-row items-center justify-between gap-3'>
            <div><MdEmail size={40}/></div>
            <div className=''>
            <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Email :
                  </h1>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>lalitha@leelafoods.co.in</p>
                
            </div>
        </div>

        <div className='flex flex-row items-center justify-between gap-3'>
            <div><FaLocationDot size={40}/></div>
            <div className=''>
            <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Location :
                  </h1>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>Leela Food Supplies</p>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>Sharada Towers Unit 2,   </p>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>Ramaswamipalya, Chinnapa Garden,</p>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>Benson Town, Bengaluru,</p>
                <p className='font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1'>Karnataka 560046</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contactinfo