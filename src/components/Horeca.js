import React from "react";

import Navbar from "../CommonComponents/Navbar/Navbar";

import "./About.css";
import { Col, Container, Row } from "reactstrap";


import Whatsapp from "./Whatsapp";
import { Helmet } from "react-helmet";

const Horeca = () => {
  return (
    <>
     <Helmet>
        <title>Leela Food Supplies</title>
        <meta name="description" content="Discover premium HoReCa food ingredients at Leela Food Supplies – Your one-stop solution for hotels, restaurants, caterers, and more. Elevate your culinary experience with our quality supplies!" />
      </Helmet>
     
        <Navbar reloadnavbar={false} />
        <div className="flex flex-col items-center justify-center">
        <div className="  lg:mx-12 ">
          <h1 className="text-[#7ED957] font-extrabold text-center self-center font-serif mt-9 mb-1 text-2xl md:text-4xl ">
          HoReCa Premium Quality Food Ingredients Suppliers & Distributors in India
          </h1>
          <h2 className="text-[#7ED957] font-extrabold text-center self-center font-serif mb-1 text-xl md:text-2xl ">
          From kirana stores to 5-star hotels and beyond
          </h2>

          {/* 2nd */}

          <section className="">
            <Container>
              <Row className="flex flex-col-reverse items-center justify-center p-6  xl:flex-row  xl:items-center xl:justify-between">
                <Col className="w-full xl:w-3/4" lg="6" md="6">
                  <div className="about__content xl:mr-9 mt-9">
                    <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Your Comprehensive Solution for Horeca and Office Supplies
                    </h1>

                    <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    Leela Food Supplies proudly stands as a premier HoReCa Food Ingredients Supplier and Distributor in India, specializing in providing top-notch products to hotels, restaurants, and catering businesses. Our commitment extends beyond food ingredients to cover a wide array of essential supplies, including office supplies, pantry and housekeeping products, corporate gifting solutions, and exciting value-adds. As your single source for everything you need, we take pride in offering dedicated customer service, flexible payment options, and an array of attractive features to streamline your procurement experience. At Leela Food Supplies, we believe in providing you with all the products you need from one source, ensuring great prices with no compromise on quality or brands. We also offer special programs and benefits designed to drive the success of your business, making us your trusted partner in the industry.
                    </p>
                  </div>
                </Col>

                <Col className="w-full md:w-1/2  " lg="6" md="6">
                  <div className="about__img mx-auto  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                    <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/Our-Customers/Restaurants/Restaurants.jpg?rev=8a31c263de974745b13cbfbe844f4570&h=250&webp=1&hash=DADD3BF79284EB08AB35956EF4370B9C" alt="" className="w-100" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* 3rd */}

          <section className="">
            <Container>
              <Row className="flex flex-col items-center justify-center p-6  xl:flex-row  xl:items-center xl:justify-between">
                <Col className="w-full md:w-1/2 " lg="6" md="6">
                  <div className="about__img  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                    <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/Our-Customers/Caterers-and-Canteens/CaterersCanteens.jpg?rev=5d65cdff3bb14f49938218f487f997c1&h=250&webp=1&hash=EC63C0D20D533A07A5ECC8543FE96D72" alt="" className="w-100" />
                  </div>
                </Col>

                <Col className="w-full xl:w-3/4" lg="6" md="6">
                  <div className="about__content xl:ml-9 mt-9">
                    <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Caterers & Canteens: Elevate Your Culinary Experience with Leela Food Supplies
                    </h1>

                    <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    Caterers and canteens play a pivotal role in delivering delightful culinary experiences, and at Leela Food Supplies, we understand the unique demands of your business. Our commitment to providing high-quality ingredients at competitive prices sets us apart as the go-to supplier for caterers and canteens across India. With specially sized packs that facilitate easy stocking, we ensure that you have the flexibility to meet the dynamic needs of your clients. Explore our comprehensive range of food and non-food products, all backed by our stringent quality assurance measures. Leela Food Supplies introduces specialized programs such as the Chef-o-logy program and a customer consultant program, designed to enhance your culinary offerings and streamline your ordering process. From gourmet foods to staples, cleaning supplies to office essentials, discover everything your catering business needs at Leela Food Suplies.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="">
            <Container>
              <Row className="flex flex-col-reverse items-center justify-center p-6  xl:flex-row  xl:items-center xl:justify-between">
                <Col className="w-full xl:w-3/4" lg="6" md="6">
                  <div className="about__content xl:mr-9 mt-9">
                    <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Restaurants and Hotels: Experience Seamless Bulk Grocery Ordering with Leela Food Supplies
                    </h1>

                    <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    Restaurants and hotels thrive on the seamless supply of high-quality ingredients, and Leela Food Supplies is your dedicated partner in meeting these demands. Our bulk grocery ordering services are tailored to cater to the unique requirements of restaurants and hotels, ensuring a hassle-free procurement process. Benefit from our extensive range of products, including gourmet foods, staples, cleaning supplies, and even office essentials. At Lella Food Supplies, we prioritize quality assurance, providing you with the assurance that your bulk orders meet the highest standards. Leverage our special programs and benefits crafted to drive the success of your business, including the Chef-o-logy program and a customer consultant program. Elevate your culinary offerings and streamline your operations with Leela Food Supplies, your trusted supplier for bulk grocery orders in the restaurant and hotel industry.
                    </p>
                  </div>
                </Col>

                <Col className="w-full md:w-1/2 " lg="6" md="6">
                  <div className="about__img  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                    <img  src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Infos-and-Services/Our-Customers/Hotels/Hotels.jpg?rev=8538b5c32118423b8373ffb24040bc84&h=250&webp=1&hash=86BE478BE4D90A93E4487B1610CF18B1" alt="" className="w-100 lg:h-auto lg:w-auto" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Whatsapp />
        </div>
      </div>
    </>
  );
};

export default Horeca;
