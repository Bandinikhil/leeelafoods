import React from 'react'
import './SingleBanner.css'

const SingleBanner = ({bannerimage}) => {
  return (
    <div className='singlebanner'>
        <div className='bannerimgfilter'></div>
        <img className='bannerimg bg-cover object-cover bg-no-repeat' src={bannerimage} alt='noimg' />
        <div className='bannerheading'>
            
        </div>
    </div>
  )
}

export default SingleBanner