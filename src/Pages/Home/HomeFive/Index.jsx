import React from "react";
import H1 from "../../../assets/Home6.webp";
import H2 from "../../../assets/Home8.webp";
import H3 from "../../../assets/Home10.webp";
import Button from "../../../Components/Button/Index";
import { FaCommentDollar, FaHeadset, FaShieldAlt } from "react-icons/fa";

const HomeFive = () => {
  const Align = [
    {
      img: H1,
      
      icon: <FaShieldAlt />,
      text1: "Safe & Secure",
      text2: "Your safety is our top priority on every project we handle.",
    },
    {
      img: H2,
      
      icon: <FaHeadset />,
      text1: "24x7 Support",
      text2: "Round-the-clock assistance for emergencies.",
    },
    {
      img: H3,
      
      icon: <FaCommentDollar />,
      text1: "Low Cost",
      text2:
        "Affordable pricing without compromising on quality .",
    },
  ];
  return (
    <>
    <div className="flex flex-col lg:flex-row gap-5 px-5 md:px-10 py-10 lg:py-20 md:space-y-3 space-y-0   ">
      <div className="flex flex-col items-center justify-center gap-2
      ">
        <h1 className="text-2xl lg:text-4xl text-blue-500 montserrat-Semibold">Why Choose Us</h1>
        <h1 className="text-sm md:text-base text-center">
          We’re more than just electricians — we’re your dependable partners in
          power, safety, and innovation
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  ">
        {Align?.map((items, i) => (
          <div key={i} >
            <div
              style={{ backgroundImage: `url(${items.img})` }}
              className="bg-cover bg-center   lg:h-100 relative  "   
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="flex flex-col  items-center py-20 space-y-3 relative">
              <h1 className="text-4xl text-blue-600">{items.icon}</h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-white montserrat-bold">{items.text1}</h1>
              <h1 className="text-sm md:text-base text-white px-2 text-center">{items.text2}</h1>
              <div className="text-sm md:text-base ">
                <Button
                  title="Contact Us"
                  btn={` bg-blue-600 px-4 py-1 hover:text-blue-700 hover:bg-white cursor-pointer ${`text-white`}`}
                  icon="text-3xl  "
                />
              </div></div>
            </div>
          </div>
        ))}
      </div></div>
    </>
  );
};

export default HomeFive;
