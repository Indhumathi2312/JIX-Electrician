import React from "react";
import Background from "../../Components/Background/Index";
import AboutSecond from "./AboutSecond/Index";
import AboutThird from "./AboutThird/Index";
import AboutFour from "./AboutFour/Index";
import HomeSix from "../../Components/HomeSix/Index";
import A1 from "../../assets/Home11.webp";

const About = () => {
  return (
    <>
      <Background
        img={A1}
        title="About us"
        content="We’re more than electricians — we’re your trusted partners in keeping
          homes, businesses, and industries running safely and efficiently.
          Every connection we make is built on quality and trust."
      />
      <AboutSecond />
      <AboutThird />
      <AboutFour />
      <HomeSix />
    </>
  );
};

export default About;
