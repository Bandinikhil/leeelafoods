import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {leelaFoodImages} from "../utils/constants"

const Images = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  
  
    return (
      <>
       
    <div className="slider-container mx-2 mt-9 mb-14 ">
    <Slider {...settings}>
      
            {leelaFoodImages.map((img,index) => (
               
              // <img
              //   className="object-cover w-[19rem] h-44 rounded-lg shadow-xl"
              //   src={img}
              //   alt={`img`}
              // />
              <div className="sm:mx-2 flex justify-center items-center mx-auto">
              <img
              className=" w-[19rem] h-44 mx-auto  transition duration-300 ease-in-out hover:scale-110 rounded-2xl object-cover shadow-xl"
              src={img}
              alt={`img${index + 1}`}
            />
             </div>
            ))}
          
            </Slider>
          </div>
      
    
      </>
    );
  };
  
  export default Images;
  