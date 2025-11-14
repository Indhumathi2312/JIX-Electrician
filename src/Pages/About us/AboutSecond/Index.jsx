import React from "react";
import Slider from "../../../Components/slider/Index";

const AboutSecond = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  py-10 md:py-15 lg:py-20 px-10 bg-[#f6f6f8] ">
        <div className="flex flex-col  items-center  md:py-40 lg:py-50  ">
          <h1 className=" text-xl md:text-3xl lg:text-5xl montserrat-bold">Company Profile</h1>
          <h1 className="text-sm md:text-lg lg:text-2xl montserrat-SemiBold">Delivering Power with Purpose</h1>
        </div>
        <div className="space-y-2 py-5 md:py-0">
          <h1 className="md:text-sm lg:text-base text-gray-400 text-center md:text-left ">
            For years, we’ve been providing dependable electrical services to
            residential, commercial, and industrial clients. Our certified
            electricians are dedicated to delivering safe, efficient, and
            code-compliant solutions that stand the test of time. Whether it’s a
            small repair, a complete rewiring project, or a large-scale
            electrical installation, we combine expertise with integrity to
            ensure every customer enjoys peace of mind and lasting results.
          </h1>
          <h1 className="text-xl lg:text-3xl text-center md:text-left">Accolades</h1>
          <h1 className="text-sm md:text-base text-gray-400 text-center md:text-left">
            Our passion for quality and safety has earned us the trust of
            countless customers and industry professionals alike.
          </h1>
          <Slider/>
        </div>
      </div>
    </>
  );
};

export default AboutSecond;
