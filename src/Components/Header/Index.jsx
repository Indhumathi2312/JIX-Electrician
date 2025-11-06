import React, { useState } from "react";
import Logo1 from "../../assets/Logo3.png";

import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Header = () => {
  const First = [
    { Name: "Home", path: "/" },
    { Name: "About Us", path: "/about" },
    { Name: "Services", path: "/services" },
    { Name: "FAQ", path: "/faq" },
    { Name: "Contact", path: "/contact" },
    { Name: "+1-800-123-4567" },
  ];
  const [Open, setOpen] = useState(false);
  const location = useLocation();
  const Currentpath = location.pathname;
  const Change = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* ------large screen---- */}
      <div className=" flex justify-between items-center px-10">
        <div>
          <img src={Logo1} alt="" className="w-40 md:w-70 lg:w-100" />
        </div>

        {First?.map((items, i) => (
          <div key={i} className="hidden lg:block">
            <div className="flex ">
              <a
                href={items.path}
                className={`${
                  Currentpath == items.path ? `text-blue-900` : `text-blue-400`
                }`}
              >
                {items.Name}
              </a>
            </div>
          </div>
        ))}
        {/* -----Small screen----- */}
        <div onClick={Change} className="lg:hidden block text-2xl md:text-4xl text-blue-500">
          {Open ? <IoMdClose /> : <BiMenu />}
        </div>
      </div>
      {Open && (
      <div className="block text-[15px]  duration-300 font-normal lg:hidden">
        {First?.map((items, i) => (
          <div key={i} className="block lg:hidden">
            <div className="flex ">
              <a
                href={items.path}
                className={`flex flex-col w-full justify-center px-3 py-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] ${
                  Currentpath == items.path ? `text-blue-900` : `text-blue-400`
                }`}
              >
                {items.Name}
              </a>
            </div>
          </div>
        ))}
      </div>
      )}
    </>
  );
};

export default Header;
