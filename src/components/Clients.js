import React from "react";
import SingleBanner from "../CommonComponents/Banners/SlingleBanner";
import { clientsLogos } from "../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Clients = () => {
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
          slidesToShow: 3,
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
          initialSlide: 2
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
      <h1 className="text-[#7ED957] font-extrabold text-center self-center font-serif mt-9 mb-4 text-2xl md:text-4xl ">
        Our Clients
      </h1>
      <h2 className="font-serif font-medium text-center text-l md:text-2xl text-[gray] mb-1">
        Delivers products or services that meet the needs and expectations of
        customers{" "}
      </h2>
      <h2 className="font-serif font-medium text-center text-l md:text-2xl text-[gray] mb-7">
        across India and extends services to certain clients regionally
      </h2>
      {/* <SingleBanner bannerimage="https://akshayapatraindia.weebly.com/uploads/2/6/6/0/26605725/mid-day-meal-impact_orig.jpg" heading="Akshaya Patra"/> */}
      <div className="flex flex-col h-[450px] mx-3 w-100% md:flex-row md:w-[92%] md:h-[200px] lg:h-[350px] items-center justify-between gap-7 md:mx-auto object-cover">
        <img
          className="md:w-1/2 w-full h-full rounded-lg"
          src="https://akshayapatraindia.weebly.com/uploads/2/6/6/0/26605725/mid-day-meal-impact_orig.jpg"
          alt="akshayaPatra"
        />
        <img
          className="md:w-1/2 w-full h-full rounded-lg"
          src="https://iskconlucknowofficial.org/assets/images/hero/hero_food.png"
          alt="akshayaPatra"
        />
      </div>
     
        {/* <div className="flex flex-wrap md:w-[100%] items-center justify-center gap-14 my-6">
    {clientsLogos.map((img, index) => (
      <div
        key={index}
        className="rounded-lg overflow-hidden bg-no-repeat bg-fill object-cover w-[19rem] h-44  relative z-10 bg-gradient-to-b from-transparent cursor-pointer hover:opacity-100 shadow-md"
      >
        <img
          className="w-full h-full aspect-square transition duration-300 ease-in-out hover:scale-110 rounded-2xl object-cover shadow-xl"
          src={img}
          alt={`img${index + 1}`}
        />
      </div>
    ))}
  </div> */}
  <div className="slider-container mx-2 mt-9 mb-14 ">
  <Slider {...settings}>
    
          {clientsLogos.map((img,index) => (
             
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
        {/* <Slider {...settings}>
                  {booking?.images?.Data?.map((img) => (
                    <img
                      className="h-48 w-full object-cover rounded-lg"
                      src={img.url}
                      alt="coursesImg"
                    />
                  ))}
                </Slider> */}
  
    </>
  );
};

export default Clients;
