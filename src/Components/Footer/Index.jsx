import React from "react";
import L1 from "../../assets/Logo3.png";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center space-y-5 py-10 bg-blue-200 ">
        <div className="sapce-y-5 place-items-center md:place-items-start ">
          <img src={L1} alt="logo" className="w-60 md:w-80 " />
          <h1 className="px-10 text-gray-500  montserrat-SemiBold text-sm md:text-base text-center md:text-left">
            JIX Electrician provides expert electrical services, reliable
            repairs, safe installations, and maintenance for homes and
            businesses with trusted professionals.
          </h1>
        </div>
        <div className="space-y-5 place-items-center md:place-items-start  ">
          <h1 className="montserrat-bold text-xl md:text-3xl">Contact</h1>
          <div className="text-gray-500 text-x1 montserrat-SemiBold space-y-1 text-center md:text-left">
            <h1>+1-800-123-4567</h1>
            <h1>+1 123-456-7890</h1>
            <h1>info@domain.com</h1>
            <h1>1240 Oakridge Blvd, Fairview, TX</h1>
            <h1>75442, USA</h1>
          </div>
        </div>
        <div className="space-y-5 place-items-center md:place-items-start ">
          <h1 className="montserrat-bold text-xl md:text-3xl">Hours</h1>
          <div className="text-gray-500 montserrat-SemiBold space-y-1 text-center md:text-left text-sm md:text-base">
            <h1>Mon–Fri: 8:00 AM – 6:00 PM</h1>
            <h1>Sat: 9:00 AM – 2:00 PM</h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-700  md:flex items-center justify-center space-y-5 md:space-y-0 md:justify-between  px-10 py-5 md:py-7">
        <h1 className="text-white text-xs  md:text-base text-center md:text-left">
          Copyright © 2025 Electrician | Powered by Electrician{" "}
        </h1>
        <div className="flex items-center justify-center  text-lg md:text-2xl text-white gap-5">
          <span className=" bg-blue-400 p-1 cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="bg-blue-400 p-1 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="bg-blue-400 p-1 cursor-pointer">
            <FaGooglePlusG />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
