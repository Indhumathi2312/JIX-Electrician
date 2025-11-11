import React from "react";
import { BiNotepad } from "react-icons/bi";
import { CiLocationArrow1, CiSettings } from "react-icons/ci";
import { FaRegClock, FaRegLightbulb, FaRegStar } from "react-icons/fa";

const HomeFour = () => {
  const Supply = [
    {
      icons: <FaRegLightbulb />,
      text1: "Lighting Solutions",
      text2:
        "Our lighting solutions provide energy-efficient, stylish, and durable options to brighten homes, offices, and outdoor spaces with perfect illumination.",
    },
    {
      icons: <CiSettings />,
      text1: "Electrical Installations",
      text2:
        "We provide professional electrical installing services, ensuring safe wiring, efficient connections, and reliable power systems for homes, offices, and industries.",
    },
    {
      icons: <FaRegClock />,
      text1: "Wiring & Rewiring",
      text2:
        "Our expert rewiring services upgrade old electrical systems, ensuring safety, improved performance, and compliance with modern energy standards for every property.",
    },
    {
      icons: <FaRegStar />,
      text1: "Electrical Panel Upgrades",
      text2:
        "We provide professional electrical panel upgrades to increase power capacity, improve safety, prevent overloads, and ensure efficient energy distribution.We provide professional electrical panel upgrades to increase power capacity, improve safety, prevent overloads, and ensure efficient energy distribution. ",
    },
    {
      icons: <CiLocationArrow1 />,
      text1: "Generator Installation",
      text2:
        "Our team offers reliable generator installation services to provide continuous power supply, ensuring safety, efficiency, and comfort during power outages.",
    },
    {
      icons: <BiNotepad />,
      text1: "Ev charged setup services",
      text2:
        "We offer professional EV charge setup services, ensuring safe installation, fast charging, and convenient access for your electric vehicle at home or work.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 lg:py-20 px-7 md:px-10 bg-[#f6f6f8]">
        {Supply?.map((items, i) => (
          <div key={i} className="flex flex-col items-center space-y-5">
            <h1 className="text-5xl text-blue-500">{items.icons}</h1>
            <h1 className="text-lg lg:text-2xl montserrat-semibold">{items.text1}</h1>
            <h1 className="text-center text-gray-400 text-sm lg:text-base">{items.text2}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeFour;
