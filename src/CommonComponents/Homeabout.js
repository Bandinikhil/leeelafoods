import React from "react"; 
import bulkricesuppliers from "../images/horeca-food-suppliers.jpg"
import lellafoodsuppliers from "../images/bulk-rice-suppliers.jpg"
import horecasuppliers from "../images/leela-food-supliers-main.jpg"
import Images from "./Images";

const Homeabout = () => {
  return (
    <div className="m-0">
      <h1 className="text-[#7ED957] font-extrabold text-center self-center font-serif mt-9 mb-1 text-2xl md:text-4xl ">
        About Leela Food Supplies
      </h1>
      <Images/>

      <div className="px-7 pt-5 lg:px-16  md:mt-1">
        {/* <div className="flex flex-col items-center gap-4 md:gap-14 flex-wrap justify-center md:flex-row md:items-center lg:justify-between mb-6 md:mb-12">
        <div className="rounded-lg  overflow-hidden bg-cover bg-no-repeat object-cover md:w-96 md:h-56 w-full h-full relative z-10  bg-gradient-to-b from-transparent cursor-pointer hover:opacity-100  shadow-md">
          <img
            className=" transition h-full  duration-300 ease-in-out hover:scale-110 rounded-2xl object-contain shadow-xl"
            src={bulkricesuppliers}
            alt="img1"
          />
        </div>
        <div className="rounded-lg  overflow-hidden bg-cover bg-no-repeat object-cover md:w-96 md:h-56  w-full h-full  relative z-10  bg-gradient-to-b from-transparent cursor-pointer hover:opacity-100  shadow-md">
          <img
            className=" transition  duration-300 ease-in-out hover:scale-110 rounded-2xl object-cover shadow-xl"
            src={lellafoodsuppliers}
            alt="img1"
          />
        </div>
        <div className="rounded-lg  overflow-hidden bg-cover bg-no-repeat object-cover md:w-96 md:h-56  w-full h-full relative z-10  bg-gradient-to-b from-transparent cursor-pointer hover:opacity-100  shadow-md">
          <img
            className=" transition  duration-300 ease-in-out hover:scale-110 rounded-2xl object-cover shadow-xl"
            src={horecasuppliers}
            alt="img1"
          />
        </div>
        </div> */}

        <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
          Welcome to Leela Food Supplies, established in January 2020, stands as
          a prominent wholesale grocery seller with a primary focus on catering
          to the Horeca sector — encompassing hotels, restaurants, and catering
          services. At Leela Food Supplies, we take pride in our dedication to
          cleanliness and hygiene, ensuring that our clients receive only the
          freshest and finest bulk grocery supplies. our unwavering commitment
          to quality extends beyond mere transactions; it is a pledge to elevate
          your Horeca experience. With a meticulous selection of premium
          products and an emphasis on customer satisfaction. we redefine
          wholesale grocery solutions to meet the unique demands of hotels,
          restaurants, and catering services.
        </p>
        <br />
        <p className="font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
          As part of our commitment to social responsibility, Leela Food
          Supplies actively promotes gender diversity in the workforce. A
          significant portion of our workforce comprises talented and empowered
          women, contributing to a diverse and inclusive work environment. Our
          state-of-the-art facilities boast a large godown that allows us to
          meet the dynamic needs of our clients with instant bulk supply. This
          ensures that our Horeca partners can rely on us for consistent,
          on-time deliveries, regardless of the scale of their requirements.
        </p>
        <br />
    
        <p className="hidden lg:block font-serif font-medium self-center items-center content-center place-items-center text-justify text-l md:text-2xl text-[gray] mb-1">
          At Leela Food Supplies, we understand the significance of pricing in
          the competitive market. That's why we offer the best price guarantee
          coupled with unparalleled services and complete transparency in all
          our transactions. Our commitment to fair pricing ensures that you get
          the most value for your investment. We cater to the unique needs of
          our clients through our flexible packing solutions. Whether you
          require institution packs or have specific packaging specifications,
          we tailor our services to meet your requirements. Additionally, we
          welcome both loose and bulk orders, offering the flexibility that your
          business demands. As Leela Food Supplies continues to grow, our focus
          remains on being the premier Horeca food supplier, bulk supplier, and
          grocery supplier in the industry. Our dedication to cleanliness,
          commitment to ladies' employment, instant bulk supply capabilities,
          unbeatable pricing, and flexible packing options make us your go-to
          partner for all your grocery wholesale needs.
        </p>
      </div>
    </div>
  );
};

export default Homeabout;
