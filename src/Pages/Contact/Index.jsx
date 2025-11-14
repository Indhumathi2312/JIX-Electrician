import React from "react";
import Background from "../../Components/Background/Index";
import C1 from "../../assets/Home9.jpg";
import ContactSecond from "./ContactSecond/Index";
import HomeSix from "../../Components/HomeSix/Index";

const Contact = () => {
  return (
    <>
      <Background
        img={C1}
        content="Reach out today to schedule a consultation, request a quote, or get fast, reliable support for your home, business, or industrial facility."
       title="Contact us"
       />
       <ContactSecond/>
       <HomeSix/>
    </>
  );
};

export default Contact;
