import React from "react";

const Background = ({img, title="", content="" }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover md:bg-center bg-fixed h-120 w-full relative"
      >
        <div className="bg-black/70 inset-0 absolute"></div>
        <div className="relative flex flex-col items-center py-30 lg:py-40 space-y-5">
        <h1 className="text-3xl lg:text-5xl  text-white">{title}</h1>
        <h1 className="text-white text-xs md:text-base lg:text-lg  px-10 md:px-35 lg:px-60 text-center    ">
          {content}
        </h1></div>
      </div>
    </>
  );
};

export default Background;
