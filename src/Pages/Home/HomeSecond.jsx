import React from "react";
import H1 from "../../assets/Home3.jpg";
import { RiArrowDropRightLine } from "react-icons/ri";
import Button from "../../Components/Button/Index";

const HomeSecond = () => {
  const point = [
    {
      icon: <RiArrowDropRightLine />,
      Text: "Licensed & Insured Technicians",
    },
    {
      icon: <RiArrowDropRightLine />,
      Text: "Energy-Efficient Solutions",
    },
    {
      icon: <RiArrowDropRightLine />,
      Text: "Guaranteed Satisfaction",
    },
  ];
  return (
    <>
      <div className="py-10 md:py-20 bg-gray-200">
        <div className="flex flex-col items-center space-y-5  ">
          <h1 className="text-xl md:text-4xl lg:text-5xl montserrat-bold">
            Your Local Electrical Experts
          </h1>
          <h1 className="text-sm md:text-base px-10 text-center">
            Your Local Electrical Experts providing reliable, affordable, and
            safe electrical services for homes and businesses with expert
            technicians and quick support.
          </h1>
          <h1 className="border-b bg-gray-400 w-30 md:w-50"></h1>
        </div>
        <div className="flex  flex-col lg:flex-row gap-10 py-3 md:py-5 lg:py-10">
          <div>
            <img
              src={H1}  
              alt="Image"
              className="w-210 h-50 md:h-150 px-20 lg:px-10"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:px-10 space-y-5">
            <h1 className="text-xl md:text-4xl montserrat-SemiBold text-center ">
              Lighting the Way to Reliable Power
            </h1>
            <h1 className="text-sm md:text-base text-center text-gray-500 px-10 md:px-20 ">
              We specialize in residential, commercial, and industrial
              electrical systems — providing trusted expertise and responsive
              support for every project.
            </h1>
            <div className=" ">
              {point?.map((items, i) => (
                <div
                  key={i}
                  className="flex items-center montserrat-bold text-base md:text-lg   "
                >
                  <h1 className="text-blue-500 text-lg  md:text-2xl">
                    {items.icon}
                  </h1>
                  <h1>{items.Text}</h1>
                </div>
              ))}
            </div>
            <div>
              <Button
                title="know More"
                btn={`bg-blue-600 flex items-center justify-center px-3 py-2 md:px-5 md:py-3 cursor-pointer texr-sm md:text-base hover:bg-blue-700 gap-3   ${`text-white`}`}
                icon="text-lg md:text-xl bg-white text-blue-600 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSecond;
