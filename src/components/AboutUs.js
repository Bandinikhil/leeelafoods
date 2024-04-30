import React from "react";
import Navbar from "../CommonComponents/Navbar/Navbar";

import { certificates } from "../utils/constants";
import CountUp from "react-countup";
import "./About.css";
import { Col, Container, Row } from "reactstrap";

import mainImg from "../images/grocery-supplies-3.jpg";
import hygiene from "../images/leela-foods-Hygiene-clean.jpg";
import bulkgroceries from "../images/bulk-rice-suppliers.jpg";
import womenempowerment from "../images/women-empowerment-leela-food-supplies.jpg";
import Whatsapp from "./Whatsapp";
import { Helmet } from 'react-helmet';
import Images from "../CommonComponents/Images";

const AboutUs = () => {
  return (
    <>
     <Helmet>
        <title>Leela Food Supplies</title>
        <meta name="description" content="Discover excellence at Leela Food Supplies - Your trusted wholesale grocery partner since 2020. Quality products, hygiene, and unmatched service. Elevate your Horeca experience today!" />
      </Helmet>
      <Navbar reloadnavbar={false} />
      <div className="  lg:mx-12 ">
        <h1 className="text-[#7ED957] font-extrabold text-center self-center font-serif mt-9 mb-1 text-2xl md:text-4xl ">
          About Leela Food Supplies
        </h1>
        <Images/>
        <div className="flex flex-col items-center justify-center">
        <section className="">
          <Container>
            <Row className="flex flex-col items-center justify-center p-6  xl:flex-row  xl:items-center xl:justify-between">
              <Col className="w-full xl:w-1/4 " lg="6" md="6">
                <div className="about__img  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                  <img src={mainImg} alt="" className="w-100" />
                </div>
              </Col>

              <Col className="w-full xl:w-3/4" lg="6" md="6">
                <div className="about__content xl:ml-9 mt-9">
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    Welcome to Leela Food Supplies, established in January 2020,
                    stands as a prominent wholesale grocery seller with a
                    primary focus on catering to the Horeca sector —
                    encompassing hotels, restaurants, and catering services. At
                    Leela Food Supplies, we take pride in our dedication to
                    cleanliness and hygiene, ensuring that our clients receive
                    only the freshest and finest bulk grocery supplies. our
                    unwavering commitment to quality extends beyond mere
                    transactions; it is a pledge to elevate your Horeca
                    experience. With a meticulous selection of premium products
                    and an emphasis on customer satisfaction. we redefine
                    wholesale grocery solutions to meet the unique demands of
                    hotels, restaurants, and catering services.
                  </p>

                  <div className="about__counter ">
                    <div className="  flex-wrap  items-center justify-center lg:justify-start lg:flex-row flex gap-5 ">
                      <div className="single__counter">
                        <span className="counter">
                          <CountUp
                            start={0}
                            end={30}
                            duration={3}
                            suffix="lac"
                          />
                        </span>

                        <p className="counter__title">Ltr's Oil sold</p>
                      </div>

                      <div className="single__counter">
                        <span className="counter">
                          <CountUp
                            start={0}
                            end={15}
                            duration={3}
                            suffix="lac"
                          />
                        </span>

                        <p className="counter__title">Kg's Rice sold</p>
                      </div>

                      <div className="single__counter">
                        <span className="counter">
                          <CountUp
                            start={0}
                            end={500}
                            duration={3}
                            suffix="K"
                          />
                        </span>

                        <p className="counter__title">Kg's Atta Sold</p>
                      </div>
                      <div className="single__counter">
                        <span className="counter">
                          <CountUp
                            start={0}
                            end={600}
                            duration={3}
                            suffix="K"
                          />
                        </span>

                        <p className="counter__title">Kg's Watermelon</p>
                        <p className="counter__title">Seed's sold</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 2nd */}

        <section className="">
          <Container>
            <Row className="flex flex-col-reverse items-center justify-center p-6  xl:flex-row  xl:items-center xl:justify-between">
              <Col className="w-full xl:w-3/4" lg="6" md="6">
                <div className="about__content xl:mr-9 mt-9">
                  <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Clean and Hygiene Practices
                  </h1>

                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    At Leela Food Supplies, we understand the critical
                    importance of maintaining impeccable hygiene standards in
                    the food industry. Our operations are characterized by
                    rigorous cleanliness protocols, guaranteeing that every
                    product reaching our clients adheres to the highest
                    standards of safety and quality.
                  </p>
                </div>
              </Col>

              <Col className="w-full xl:w-1/4 " lg="6" md="6">
                <div className="about__img  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                  <img src={hygiene} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 3rd */}

        <section className="">
          <Container>
            <Row className="flex flex-col items-center justify-center p-6  xl:flex-row  xl:items-center xl:justify-between">
              <Col className="w-full xl:w-1/4 " lg="6" md="6">
                <div className="about__img  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                  <img src={womenempowerment} alt="" className="w-100" />
                </div>
              </Col>

              <Col className="w-full xl:w-3/4" lg="6" md="6">
                <div className="about__content xl:ml-9 mt-9">
                  <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                    Empowering Women through Employment
                  </h1>

                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    As part of our commitment to social responsibility, Leela
                    Food Supplies actively promotes gender diversity in the
                    workforce. A significant portion of our workforce comprises
                    talented and empowered women, contributing to a diverse and
                    inclusive work environment.
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
                    Spacious Godown for Instant Grocery Bulk Supply
                  </h1>

                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
                    Our state-of-the-art facilities boast a large godown that
                    allows us to meet the dynamic needs of our clients with
                    instant bulk supply. This ensures that our Horeca partners
                    can rely on us for consistent, on-time deliveries,
                    regardless of the scale of their requirements.
                  </p>
                </div>
              </Col>

              <Col className="w-full xl:w-1/4 " lg="6" md="6">
                <div className="about__img  w-full transition duration-300 ease-in-out hover:scale-110 object-cover  shadow-xl ">
                  <img src={bulkgroceries} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </div>
        <div className="p-6">
          <h1
            className="text-[#7ED957] font-medium text-center
          font-serif  mb-2 text-xl md:text-3xl"
          >
            Best Price Guarantee with Unmatched Services & Tailored Packing
            Solutions as per your specifications
          </h1>
          <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
            Leela Food Supplies is dedicated to providing the best price
            guarantee without compromising on the quality of our services.
            Transparency is at the core of our business ethos, and we take pride
            in offering our clients the most competitive prices in the market,
            coupled with unparalleled customer service.
            <br />
            Understanding that each client has unique needs, Leela Food Supplies
            offers packing solutions tailored to individual specifications.
            Whether it's institution packs or customized packaging, we cater to
            diverse requirements. We also welcome orders in both loose and bulk
            quantities.
          </p>
        </div>

        <h1 className="text-[#7ED957] font-extrabold text-center self-center font-serif mt-9 mb-4 text-2xl md:text-4xl ">
          Quality
        </h1>
        <div className="flex p-6 flex-col justify-center items-center xl:items-center xl:flex-row xl:justify-between">
          <div className="w-full xl:w-1/3">
            <img
              className="w-full"
              src="https://leelafoods.com/wp-content/uploads/2020/06/leela-foods-8-1.jpg"
              alt=""
            />
          </div>

          <div className="xl:w-2/3">
            <p className="font-serif font-medium text-justify text-l md:text-2xl text-[gray] mb-1">
              At Leela Food Supplies, we are unwaveringly committed to
              delivering exceptional quality in every aspect of our offerings.
              Our dedication to maintaining the highest standards is evident in
              our adherence to BIS (Bureau of Indian Standards) guidelines
              during the production of all our groceries, dals, wheat, rice,
              meat, and fish. We prioritize freshness, ensuring that each
              product meets stringent quality criteria. Our commitment to
              quality is not just a promise; it's a fundamental aspect of our
              ethos, ensuring that our customers receive nothing but the finest
              and freshest products for their culinary needs.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[#7ED957] font-medium text-center self-center font-serif mt-6 mb-4 text-xl md:text-3xl">
            Going beyond customer’s expectations with our products and services.
          </h1>

          {/* <img className='absolute z-[-10] h-auto' src="https://leelafoods.com/wp-content/uploads/2020/09/leela3.jpg" alt="" /> */}
          <div className="z-30 object-contain   bg-[url('https://leelafoods.com/wp-content/uploads/2020/09/leela3.jpg')]">
            <div className="flex flex-wrap items-center justify-center lg:justify-between mx-6 lg:mx-32">
              <div className="flex items-center justify-start">
                <div className="icon">
                  <img
                    src="https://leelafoods.com/wp-content/uploads/2020/08/commitment.png"
                    alt=""
                  />
                </div>
                <div className="content ">
                  <h3 className="text-xl font-bold">COMMITMENT</h3>
                  <p className="mb-0">
                    Delivering on our promise to implement initiatives{" "}
                  </p>
                  <p className="mt-0">which will benefit our customers.</p>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="icon">
                  <img
                    src="https://leelafoods.com/wp-content/uploads/2020/08/intagraty-1.png"
                    alt=""
                  />
                </div>
                <div className="content ">
                  <h3 className="text-xl font-bold">INTEGRITY</h3>
                  <p className="mb-0">
                    Honesty without compromising the truth and{" "}
                  </p>
                  <p className="mt-0">maintaining trust.</p>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="icon">
                  <img
                    src="https://leelafoods.com/wp-content/uploads/2020/08/innovation1-1.png"
                    alt=""
                  />
                </div>
                <div className="content ">
                  <h3 className="text-xl font-bold">INNOVATION</h3>
                  <p className="mb-0">
                    Creative ideas to pave the way of our business growth{" "}
                  </p>
                  <p className="mt-0">and add value for customers.</p>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="icon">
                  <img
                    src="https://leelafoods.com/wp-content/uploads/2020/08/passions-1.png"
                    alt=""
                  />
                </div>
                <div className="content ">
                  <h3 className="text-xl font-bold">PASSION</h3>
                  <p className="mb-0">
                    Pulling our hearts and minds into our work with{" "}
                  </p>
                  <p className="mt-0">enthusiastic team work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[#7ED957] font-extrabold text-center self-center font-serif mt-9 mb-4 text-2xl md:text-4xl mb-14 ">
          Accreditations & Certifications
        </h1>
        <div className=" mx-6 lg:mx-32 flex items-center justify-between flex-wrap">
          {certificates.map((images) => (
            <img src={images} alt="" />
          ))}
        </div>
        <Whatsapp />
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default AboutUs;
