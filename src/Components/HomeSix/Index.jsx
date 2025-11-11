import React from "react";

const HomeSix = () => {
  return (
    <>
      <div className="py-10 px-5 md:py-10 lg:py-20 md:px-10  ">
        <div className="bg-[#f6f6f8] flex md:flex-row flex-col justify-center gap-5 lg:gap-10 py-5 md:py-0   ">
          <div className="space-y-5 md:place-content-center text-center md:text-left px-5   ">
            <h1 className="text-xl md:text-2xl lg:text-3xl montserrat-SemiBold">Request a Quote!</h1>
            <div>
              <h1 className="text-xl lg:text-2xl montserrat-SemiBold">Location:</h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                1240 Oakridge Blvd, Fairview, TX 75442, USA
              </h1>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl montserrat-SemiBold">Email:</h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                info@domain.com
              </h1>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl montserrat-SemiBold">Phone:</h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                +1-800-123-4567
              </h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                +1 123-456-7890
              </h1>
            </div>
          </div>
          <div className=" md:py-10 lg:py-20">
            <form action="submit">
              <div className="flex flex-col px-10 space-y-3  ">
                <div className="space-x-3 flex ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 text-sm w-full md:text-base lg:text-lg outline-none bg-white focus:outline-dotted "
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="p-3 text-sm md:text-base w-full lg:text-lg outline-none bg-white focus:outline-dotted "
                  />
                </div>
                <input
                  type="text"
                  placeholder="Contact No"
                  className="p-3 text-sm md:text-base lg:text-lg outline-none bg-white focus:outline-dotted "
                />
                <input
                  type="text"
                  placeholder="Purpose of Contact"
                  className="p-3 text-sm md:text-base lg:text-base  outline-none bg-white focus:outline-dotted "
                />
                <textarea
                  name="Message"
                  id="message"
                  placeholder="Your Message"
                  className="p-5 text-sm md:text-base lg:text-lg outline-none bg-white focus:outline-dotted "
                ></textarea>
                <div>
                  <button className="bg-blue-600 p-2 lg:p-3 text-white hover:bg-blue-700 cursor-pointer text-sm md:text-base">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSix;
