import React from "react";
import H1 from "../../assets/Home5.jpg";
import H2 from "../../assets/Home7.png";
import H3 from "../../assets/Home6.jpg";
import Button from "../Button/Index";

const HomeThird = () => {
  const Service = [
    {
      img: H1,
      text1: "Residential Services",
      text2:
        "Safe, efficient, and modern electrical solutions for homes — from lighting upgrades to full rewiring and smart home installations.",
      Bcolor: "bg-black/60",
      
      

    },
    {
      img: H2,
      text1: "Commercial Services",
      text2:
        "Powering offices, shops, and buildings with reliable electrical systems designed for productivity and long-term performance.",
    Bcolor:"bg-blue-600/60",
    

    },
    {
      img: H3,
      text1: "Industrial Services",
      text2:
        "Specialized electrical maintenance and installations for factories and plants — ensuring safety and operational uptime.",
    Bcolor:"bg-black/60",
    
    

    },
  ];
  return (
    <>
      <div className="grid grid-cols-1  lg:grid-cols-3  ">
        {Service?.map((items, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${items.img})` }}
            className="h-100 w-full bg-cover bg-center  relative"
          >
            <div className={`absolute inset-0 ${items.Bcolor    }  `}></div>
            <div className="relative z-10 py-25 lg:py-20  text-center">
              <div className="text-white space-y-3">
                <h1 className="text-2xl md:text-3xl montserrat-bold ">{items.text1}</h1>
                <h1 className="text-xs md:text-base montserrat-regular px-10 lg:px-0">{items.text2}</h1>
              
              </div>
              <div className="text-sm md:text-base flex justify-center py-2    ">
              <Button  title="Contact Us" btn={` bg-blue-600 px-4 py-1 hover:text-blue-700 hover:bg-white cursor-pointer ${`text-white`}`}
              icon="text-3xl  "/></div>
            
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeThird;
