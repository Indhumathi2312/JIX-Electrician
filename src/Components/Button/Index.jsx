import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Button = ({ title = "", btn = "", icon = "" }) => {
  const Location = useNavigate();

  return (
    <>
      <button
        onClick={() => Location("services")}
        className={`flex items-center ${btn}`}
      >
        <span>{title}</span>
        <span className={` ${icon}`}>
          <RiArrowDropRightLine />
        </span>
      </button>
    </>
  );
};

export default Button;
