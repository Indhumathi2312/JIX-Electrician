import React from "react";
import S1 from "../../../assets/Service1.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import S2 from "../../../assets/Home9.webp";
import S3 from "../../../assets/Home8.webp";

const ServiceSecond = () => {
  const point = [
    {
      img: S1,
      title: "Residential Services",
      about:
        "Our residential services keep your home safe, comfortable, and energy-efficient. From simple repairs to full-scale installations, we provide expert solutions for homeowners looking to upgrade, maintain, or protect their electrical systems.",
      text: [
        "Electrical Repairs & Troubleshooting",
        "Lighting & Smart Home Solutions",
        "Backup Generators & Safety Systems",
      ],
    },
    {
      img: S2,
      title: "Industrial Services",
      about:
        "Our industrial electrical services ensure your factories, plants, and warehouses operate safely and efficiently. We specialize in large-scale systems that require precision, compliance, and durability under demanding conditions.",
      text: [
        "System Maintenance & Upgrades",
        "Power Distribution & Panel Services",
        "Emergency & Safety Solutions",
      ],
      Reverse:true,
    },
    {
      img: S3,
      title: "Commercial Services",
      about:
        "We help businesses maintain safe, efficient, and code-compliant electrical systems. From offices and retail spaces to restaurants and warehouses, our team delivers solutions designed to minimize downtime and support growth.",
      text: [
        "Energy Efficiency Upgrades",
        "Emergency Electrical Support",
        "Commercial Installations",
      ],
    },
  ];
  return (
    <>
      <div className="px-7 lg:px-20 lg:py-20 ">
        {point?.map((items, i) => (
          <div key={i} className={`flex  flex-col md:flex-row items-center py-5 gap-10  ${items.Reverse? ` md:flex-row-reverse  border-b border-t`: ` `}`}>
            <div
              style={{ backgroundImage: `url(${items.img})` }}
              className="bg-cover bg-center w-full md:w-1/2 lg:w-200 h-80"
            ></div>
            <div className="px-5 md:px-10 md:max-w-1/2 lg:max-w-3xl md:py-10 space-y-2 ">
              <h1 className="text-xl md:text-2xl lg:text-3xl montserrat-bold text-center md:text-left">{items.title}</h1>
              <h1 className="text-sm md:text-base max-w-xl">{items.about}</h1>
              {items.text?.map((text, i) => (
                <h1 key={i} className="flex lg:items-center  ">
                  <span className="text-blue-600 text-2xl">
                    <RiArrowDropRightLine />
                  </span>
                  <span className="text-sm md:text-base lg:text-lg montserrat-bold">{text}</span>
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceSecond;
