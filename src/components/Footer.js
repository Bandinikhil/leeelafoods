import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { RiArrowDropRightFill } from "react-icons/ri";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
const footerQuickLinks = [
  {
    display: "Home",
    url: "#"
  },
  {
    display: "About US",
    url: "#"
  },

  {
    display: "Contact Us",
    url: "#"
  },

  {
    display: "Horeca",
    url: "#"
  }
];

const footerInfoLinks = [
  {
    display: "Fruits & Vegatables",
    url: "#"
  },
  {
    display: "Seasonings",
    url: "#"
  },

  {
    display: "Dals",
    url: "#"
  },
 {
    display: "Dry Fruits",
    url: "#"
  },
  {
    display: "Flours",
    url: "#"
  },
  {
    display: "Grains",
    url: "#"
  },
  
    {
        display: "Ghee & Oils",
        url: "#"
      },
      {
        display: "Rice",
        url: "#"
      },
      {
        display: "Spices",
        url: "#"
      },
      {
        display: "Sugar",
        url: "#"
      },
      {
        display: "Cold Beverages",
        url: "#"
      },
      {
        display: "Meat & Sea Food",
        url: "#"
      },
      
    
];

const Footer = () => {
  return (
    <footer className="footer p-5 mt-7">
      <Container>
        <Row>
          <div className="flex lg:flex-row flex-col items-start justify-evenly ">
            <Col lg="3" md="6" className="mb-4">
              <h2 className=" d-flex align-items-center gap-1">
                <img className="w-36 lg:w-64" src="https://www.leelafoods.co.in/manage/uploads/cp_list/1677748072.png" alt="" /> 
              </h2>

              <div className="follows">
                <p  className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] my-3" >Follow us on social media</p>
                <div className="flex flex-row flex-wrap gap-2">
                <span>
                  {" "}
                  <a href="/">
                  <FaFacebook />
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="/">
                  <FaInstagramSquare
                   />
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="/">
                  <FaLinkedin />
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="/">
                  <FaXTwitter />
                  </a>
                </span>
                </div>
              </div>
            </Col>

            <Col lg="3" md="6" className="mb-4">
            <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                Explore
              </h1>
              <ListGroup className="">
              
                {footerQuickLinks.map((item, index) => (
                     <div className="flex flex-row items-center justify-start gap-3">
                     <span className=""><RiArrowDropRightFill size={25}/></span>
                  <p
                    key={index}
                    className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] mb-1"
                  >
                    {" "}
                    <a href={item.url}>{item.display}</a>
                  </p>
                  </div>
                ))}
               
              </ListGroup>
            </Col>

            <Col lg="3" md="6" className="mb-4">
            <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                Products
              </h1>
           
             
              <ListGroup className="">
                {footerInfoLinks.map((item, index) => (
                    <div className="flex flex-row items-center justify-start gap-3">
                    <span className=""><RiArrowDropRightFill size={25}/></span> 
                  <p
                    key={index}
                    className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] mb-1"
                  >
                    {" "}
                   
                    <a href={item.url}>{item.display}</a>
                  </p>
                  </div>
                ))}
              </ListGroup>
              
            </Col>

            <Col lg="3" md="6">
               
              <h1 className="text-[#7ED957] font-medium text-left  font-serif  mb-2 text-xl md:text-3xl">
                Contact
              </h1>
              <div className="flex flex-col items-start justify-center gap-2">
              <div className="flex flex-row items-center justify-center gap-3">
                <div>
                  <FaLocationDot size={20} />
                </div>
                <div className="">
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] mb-1">
                    Leela Food Supplies
                  </p>
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify temxt-sm md:text-xl text-[gray] mb-1">
                    Sharada Towers Unit 2,
                  </p>
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify temxt-sm md:text-xl text-[gray] mb-1">
                    Ramaswamipalya, Chinnapa Garden,
                  </p>
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify temxt-sm md:text-xl text-[gray] mb-1">
                    Benson Town, Bengaluru,
                  </p>
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] mb-1">
                    Karnataka 560046
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center gap-3">
                <div>
                  <FaPhone size={20} />
                </div>
                <div className="">
                  <p className="font-serif  self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] mb-1">
                    +91 8296052669
                  </p>
                </div>
              </div>
              {/* <p>Email: info@learntos.com</p> */}
              <div className="flex flex-row items-center justify-center gap-3">
                <div>
                  <MdEmail size={20} />
                </div>
                <div className="">
                  <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-sm md:text-xl text-[gray] mb-1">
                    lalitha@leelafoods.co.in
                  </p>
                </div>
              </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
