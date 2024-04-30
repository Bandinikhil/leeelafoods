import React from 'react'

import './BannerSlider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const BannerSlider = () => {
    const data = [
        {
            id: 4,
            image: 'https://media.istockphoto.com/id/925302942/photo/mixed-nuts-in-bowl.jpg?s=612x612&w=0&k=20&c=UOES4z43u2NaQnKljMBmWJedlSOv46AYY5PEdcuIWj0=',
            title: 'Fresh Groceries, Meat & Sea Food at your doorstep',
            description: 'Elevate Your Culinary Endeavors with Leela Food Supplies – Your Premier Destination for Bulk Grocery Solutions and Quality Non-Veg Delights!',
            button: 'htttps://www.google.com'
        },
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Fresh Groceries, Meat & Sea Food at your doorstep',
            description: 'Elevate Your Culinary Endeavors with Leela Food Supplies – Your Premier Destination for Bulk Grocery Solutions and Quality Non-Veg Delights!',
            button: 'htttps://www.google.com'
        },
        {
            id: 3,
            image: 'https://media.istockphoto.com/id/154925734/photo/red-meat-on-wooden-board-against-black-background.webp?b=1&s=170667a&w=0&k=20&c=-gnROTpuqfW_KzmFjr00AT-64uKLSHB-s3eKqN_MTE0=',
            title: 'Oceanic Meats: Fresh Cuts, Unmatched Quality',
            description: 'Elevate Your Culinary Experience with Leela Food Supplies – Unmatched Quality in Bulk Groceries and Horeca Essentials, Plus the Freshest Non-Veg Delights!',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            title: 'Wholesale Wonderlands & Culinary Connections',
            description: 'From Bulk Grocery Needs to Quality Non-Veg, Leela Food Supplies Stands as Your Go-To Partner – Trusted Bulk Grocery and Horeca Supplier.',
            button: 'htttps://www.google.com'
        },
       
    ]


 
   
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }


    return (
        <div className='bannerslider h-full'>
           <Slide>
                {/* {
                    data.map(item => {
                        console.log(item);
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                } */}
                {data.map((slideImage, index)=> (
            <div key={index}>
              <div className='imagecont' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.image})` }}>
                {/* <span className='' style={spanStyle}>{slideImage.title}</span> */}
                <div className='content'>
                                    <h1>{slideImage.title}</h1>
                                    <span>{slideImage.description}</span>
                                    <button>Shop More</button>
                                </div>
              </div>
            </div>
          ))} 
         </Slide>
        </div>
    )
}

export default BannerSlider

