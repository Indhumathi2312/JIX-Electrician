import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Button = ({ title="", btn="", icon="", }) => {
  return (
    <>
      <button className={`flex items-center ${btn}`}>
        <span>{title}</span>
        <span className={` ${icon}`}>
          <RiArrowDropRightLine />
        </span>
      </button>
    </>
  );
};

export default Button;
