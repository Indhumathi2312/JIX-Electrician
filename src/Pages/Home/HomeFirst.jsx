import React, { useState } from "react";
import Button from "../../Components/Button/Index";
import { GiWhiteBook } from "react-icons/gi";
import H1 from "../../assets/Home2.webp";

const HomeFirst = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    pcontact: "",
    message: "",
  });
  const [error, setError] = useState({});

  const Mistake = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  const Formsubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (!form.name.trim()) newError.name = "name is required";
    if (!form.email.trim()) newError.email = "email is required";
    if (!form.contact.trim()) newError.contact = "contact is required";
    if (!form.pcontact.trim()) newError.pcontact = "pcontact is required";
    if (!form.message.trim()) newError.message = "message is required";

    setError(newError);
    if (Object.keys(newError).length === 0) {
      console.log("Form data Submitted:", form);
      alert("Form data Submitted:", form);

    }
  };
  return (
    <>
      <div className="relative w-full h-250 md:h-200 lg:h-screen  ">
        <div
          style={{ backgroundImage: `url(${H1})` }}
          className=" bg-cover absolute inset-0 bg-center bg-fixed flex md:flex-row flex-col items-center justify-between px-20 lg:px-30 xl:px-10   "
        >
          <div className="bg-blue-600/70 absolute inset-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-around items-center   ">
            <div className=" lg:px-20 space-y-5 place-items-center md:place-items-start py-10 md:py-0 ">
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-white max-w-lg  text-center md:text-left montserrat-SemiBold ">
                Powering Your Home & Business With Trusted Electrical Solutions
              </h1>
              <h1 className="text-smmd:text-base text-white   md:pr-20 max-w-lg text-center md:text-left montserrat-regular ">
                From simple repairs to complete installations, our certified
                electricians deliver safe, reliable, and energy-efficient
                services you can count on.
              </h1>
              <Button
                title="know More"
                btn={`bg-white flex items-center justify-center px-3 py-2 lg:px-5 lg:py-3 hover:text-white hover:bg-blue-600 cursor-pointer   ${`text-blue-600`}`}
                icon="text-lg md:text-xl  "
              />
            </div>
            <div className=" w-70 lg:w-130 bg-blue-100 relative py-3 md:py-7 lg:py-10">
              <div className="flex flex-col items-center py-5 space-y-3">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
                  Request Callback
                </h1>
                <h1 className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Please Complete The Form
                </h1>
              </div>
              <form onSubmit={Formsubmit}>
                <div className="flex flex-col px-10 space-y-3  ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    onChange={Mistake}
                    value={form.name}
                    className={` outline-none bg-white focus:outline-dotted ${error.name? `border border-red-500 text-xs md:text-sm lg:text-base p-2`: "text-sm md:text-base p-3 lg:text-lg"} `}
                  />
                  {error.name && (
                    <p className="text-red-500 text-sm ">{error.name}</p>
                  )}
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    onChange={Mistake}
                    value={form.email}
                    className={` outline-none bg-white focus:outline-dotted ${error.email? `border border-red-500 text-xs md:text-sm lg:text-base p-2`: "text-sm md:text-base p-3 lg:text-lg"} `}
                  />
                  {error.email && (
                    <p className="text-red-500 text-sm ">{error.email}</p>
                  )}
                  <input
                    type="number"
                    placeholder="Contact No"
                    name="contact"
                    onChange={Mistake}
                    value={form.contact}
                    className= {` outline-none bg-white focus:outline-dotted ${error.contact? ` border border-red-500 text-xs md:text-sm lg:text-base p-2`: "text-sm md:text-base p-3 lg:text-lg"} `}
                  />
                  {error.contact && (
                    <p className="text-red-500 text-sm ">{error.contact}</p>
                  )}

                  <input
                    type="text"
                    placeholder="Purpose of Contact"
                    name="pcontact"
                    onChange={Mistake}
                    value={form.pcontact}
                    className={` outline-none bg-white focus:outline-dotted ${error.pcontact? `border border-red-500 text-xs md:text-sm lg:text-base p-2`: "text-sm md:text-base p-3 lg:text-lg"} `}
                  />
                  {error.pcontact && (
                    <p className="text-red-500 text-sm ">
                      {error.pcontact}
                    </p>
                  )}
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    onChange={Mistake}
                    value={form.message}
                    className={` outline-none bg-white focus:outline-dotted ${error.message? `border border-red-500 text-xs md:text-sm lg:text-base p-2`: "text-sm md:text-base p-3 lg:text-lg"} `}
                  ></textarea>
                  {error.message && (
                    <p className="text-red-500 text-sm ">{error.message}</p>
                  )}
                  <div>
                    <button className="bg-blue-600 p-2 lg:p-3 text-white hover:bg-blue-700 cursor-pointer text-sm md:text-base">
                      Request Call
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFirst;
