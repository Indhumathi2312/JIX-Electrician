import React from "react";
import F1 from "../../assets/F2.jpg";
import Background from "../../Components/Background/Index";
import FAQSecond from "./FAQSecond/Index";
import HomeSix from "../../Components/HomeSix/Index";

const FAQ = () => {
  return (
    <>
      <Background
        img={F1}
        title="FAQ"
        content="Have questions? We’re here to help. Explore our most common inquiries about our electrical services, safety practices, pricing, and more."
      />
      <FAQSecond />
      <HomeSix />
    </>
  );
};

export default FAQ;
