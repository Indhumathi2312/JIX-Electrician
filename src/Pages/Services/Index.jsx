import React from "react";
import Background from "../../Components/Background/Index";
import S1 from "../../assets/Home8.jpg";
import ServiceSecond from "./ServiceSecond/Index";
import HomeSix from "../../Components/HomeSix/Index";

const Services = () => {
  return (
    <>
      <Background
        img={S1}
        title="Services"
        content="From homes to businesses and large industrial facilities, we provide reliable, safe, and efficient electrical services tailored to meet every need."
      />
      <ServiceSecond/>
      <HomeSix/>
    </>
  );
};

export default Services;
