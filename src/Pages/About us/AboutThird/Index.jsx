import React, { useState } from "react";

const AboutThird = () => {
  const [Select, setSelect] = useState("Vission");
  const Tap = ["Vission", "Mission", "Value"];
  const Output = {
    Vission:
      "Our vision is to be recognized as the most trusted, innovative, and customer-focused electrical services provider in the communities we serve. We aim to set the standard for safety, reliability, and quality, ensuring that every home, business, and industrial facility benefits from professional, long-lasting electrical solutions.",
    Mission:
      "Our mission is to deliver high-quality electrical services that prioritize safety, reliability, and efficiency for every client. We are committed to providing solutions that not only meet immediate needs but also ensure long-term performance and peace of mind. From residential repairs to commercial installations and industrial projects, every job reflects our dedication to craftsmanship, professionalism, and customer satisfaction.",
    Value:
      "Our values are the foundation of every decision, service, and interaction we have. Safety, integrity, and quality are at the core of our work, ensuring that every project we undertake is performed responsibly, ethically, and with the highest standards. We believe in transparency, clear communication, and delivering on promises — building trust that lasts long after the job is done.",
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 px-10 gap-10 bg-[#f6f6f8]">
        <div className="space-y-5">
          <h1 className="text-3xl lg:text-5xl montserrat-Semibold">
            Driven by Purpose and Principles
          </h1>
          <h1 className="text-sm md:text-base text-gray-400">
            Our mission, vision, and values guide everything we do — from how we
            serve our customers to how we power our communities. Every project
            reflects our commitment to safety, quality, and integrity
          </h1>
        </div>
        <div>
          <div className="flex md:gap-5 ">
            {Tap?.map((Tap) => (
              <div
                key={Tap}
                onClick={() => setSelect(Tap)}
                className={`text-sm md:text-lg transition-colors montserrat-bold px-5 py-3  ${
                  Select === Tap ? `bg-white text-blue-400` : ` text-black`
                }`}
              >
                {Tap}
              </div>
            ))}
          </div>
          <div className="bg-white text-gray-400 text-sm md:text-base p-5 ">
            {Output[Select]}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutThird;
