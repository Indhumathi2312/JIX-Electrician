import React from "react";
import Question from "../../../Components/Question/Index";
import F1 from "../../../assets/Service1.webp";

const FAQSecond = () => {
  return (
    <>
      <div className="lg:py-20 md:py-15  py-10 space-y-5">
        <div className="flex justify-center">
          <div className="text-2xl md:text-3xl montserrat-bold text-blue-500">
            Have Questions?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 px-10">
          <div>
            <Question Ques="What types of electrical services do you provide?">
              We provide residential, commercial, and industrial electrical
              services, including installations, repairs, rewiring, lighting
              solutions, and emergency support.
            </Question>
            <Question Ques="Are your electricians licensed and insured?">
              Yes! All our technicians are fully licensed, insured, and trained
              to meet industry safety standards.
            </Question>
            <Question Ques="Do you offer emergency electrical services?">
              Absolutely. Our team is available 24/7 for urgent repairs and
              emergency situations to keep your home or business safe.
            </Question>
            <Question Ques="How do you ensure the safety of your work?">
              Safety is our top priority. We follow all local codes, use quality
              materials, and implement strict safety protocols on every project.
            </Question>
            <Question Ques="How much do your services cost?">
              Pricing depends on the type of service, complexity, and materials
              needed. We provide transparent estimates before starting any work.
            </Question>
            <Question Ques="Can you help with energy-efficient upgrades?">
              Yes! We install energy-efficient lighting, smart home systems, and
              modern electrical panels to reduce energy costs and improve
              performance.
            </Question>
          </div>
          <div
            style={{ backgroundImage: `url(${F1})` }}
            className="bg-cover bg-center w-70 md:w-90 h-60 lg:w-150 lg:h-90  "
          ></div>
        </div>
      </div>
    </>
  );
};

export default FAQSecond;
