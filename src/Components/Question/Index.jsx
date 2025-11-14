import React, { Children, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Question = ({ Ques, children }) => {
  const [Show, setShow] = useState(false);
  return (
    <>
      <div>
        <div>
          <div
            onClick={() => setShow(!Show)}
            className="flex items-center justify-between py-1 lg:py-3 px-2 border border-[#d5d8dc]   "
          >
            <span className="montserrat-bold text-xs md:text-sm lg:text-lg   ">
              {Ques}
            </span>
            <span className="text-sm md:text-lg">
              {Show ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {Show && (
            <p className="text-sm md:text-base text-gray-500 px-5 md:px-10 border border-[#d5d8dc] ">
              {children}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
