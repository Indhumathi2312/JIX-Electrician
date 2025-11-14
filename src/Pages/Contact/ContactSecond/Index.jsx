import React from "react";
import C1 from "../../../assets/Home9.jpg";

const ContactSecond = () => {
  const List = [
    {
      title: "Head Office",
      topic: "SD",
      live: "South Dakota",
      No: "+1-800-123-4567",
      Location: "1240 Oakridge Blvd, Fairview, TX 75442, USA",
      Border: true,
    },
    {
      title: "Regional Offices ",
      topic: "MT",
      live: "Montana",
      No: "+1-800-123-4567",
      Location: "1240 Oakridge Blvd, Fairview, TX 75442, USA",
      Border: true,
    },
    {
      title: "Head Office",
      topic: "SD",
      live: "North Dakota",
      No: "+1-800-123-4567",
      Location: "24/C W 2nd Ave, James Rd, ND 12345, USA",
      Border: false,
    },
  ];

  return (
    <>
      <div className="py-10 md:py-20 px-7 space-y-7">
        <div className="flex justify-center">
          <div
            style={{ backgroundImage: `url(${C1})` }}
            className="bg-center bg-cover w-100 h-70 md:w-150 md:h-100 rounded-4xl   "
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-3">
          {List?.map((items, i) => (
            <div
              key={i}
              className={`space-y-2  p-1 ${items.Border ? `md:border-r` : ``} `}
            >
              <h1 className="text-2xl lg:text-3xl montserrat-bold">{items.title}</h1>
              <h1 className="text-xl lg:text-2xl montserrat-bold text-blue-400">
                {items.topic}
              </h1>
              <h1 className="text-sm md:text-base text-gray-500 montserrat-SemiBold ">
                {items.live}
              </h1>

              <h1 className="text-sm md:text-base text-gray-500 montserrat-SemiBold ">
                {items.No}
              </h1>
              <h1 className="text-sm md:text-base text-gray-500 montserrat-SemiBold ">
                {items.Location}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactSecond;
