import React, { useState } from "react";

const HomeSix = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    pcontact: "",
    message: "",
  });

  const [error, setError] = useState({});

  const Mistake = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
    setError({ ...error, [e.target.name]: "" });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (!form.name.trim()) newError.name = "Name is Required";
    if (!form.email.trim()) newError.email = "email is Required";
    if (!form.contact.trim()) newError.contact = "contact is Required";
    if (!form.pcontact.trim()) newError.pcontact = "pcontact is Required";
    if (!form.message.trim()) newError.message = "message is Required";
    setError(newError);
  };

  return (
    <>
      <div className="py-10 px-5 md:py-10 lg:py-20 md:px-10 ">
        <div className="bg-[#f6f6f8] flex md:flex-row flex-col justify-center gap-5 lg:gap-10 py-5 md:py-0   ">
          <div className="space-y-5 md:place-content-center text-center md:text-left px-5   ">
            <h1 className="text-xl md:text-2xl lg:text-3xl montserrat-SemiBold">
              Request a Quote!
            </h1>
            <div>
              <h1 className="text-xl lg:text-2xl montserrat-SemiBold">
                Location:
              </h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                1240 Oakridge Blvd, Fairview, TX 75442, USA
              </h1>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl montserrat-SemiBold">
                Email:
              </h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                info@domain.com
              </h1>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl montserrat-SemiBold">
                Phone:
              </h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                +1-800-123-4567
              </h1>
              <h1 className="text-sm md:text-base text-gray-400 montserrat-bold">
                +1 123-456-7890
              </h1>
            </div>
          </div>
          <div className=" md:py-10 lg:py-20">
            <form onSubmit={FormSubmit}>
              <div className="flex flex-col px-10 space-y-3  ">
                <div className="space-x-3 flex ">
                  <input
                    type="text"
                    name="name"
                    onChange={Mistake}
                    value={form.name}
                    placeholder="Your Name"
                    className={`p-3 text-sm w-full md:text-base lg:text-lg outline-none bg-white focus:outline-dotted  ${
                      error.name
                        ? `border border-red-500 text-xs md:text-sm lg:text-lg p-2`
                        : `text-sm md:text-base p-3 lg:text-lg `
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={Mistake}
                    placeholder="Your Email"
                    className={`p-3 text-sm w-full md:text-base lg:text-lg outline-none bg-white focus:outline-dotted  ${
                      error.name
                        ? `border border-red-500 text-xs md:text-sm lg:text-lg p-2`
                        : `text-sm md:text-base p-3 lg:text-lg `
                    }`}
                  />
                </div>
                <div className="flex space-x-5 md:space-x-40">
                  <div>
                    {error.name && (
                      <p className="text-red-500 text-sm ">{error.name}</p>
                    )}
                  </div>
                  <div>
                    {error.email && (
                      <p className="text-red-500 text-sm ">{error.email}</p>
                    )}
                  </div>
                </div>
                <input
                  type="number"
                  name="contact"
                  value={form.contact}
                  onChange={Mistake}
                  placeholder="Contact No"
                  className={`p-3 text-sm w-full md:text-base lg:text-lg outline-none bg-white focus:outline-dotted  ${
                    error.name
                      ? `border border-red-500 text-xs md:text-sm lg:text-lg p-2`
                      : `text-sm md:text-base p-3 lg:text-lg `
                  }`}
                />
                <div>
                  {error.contact && (
                    <p className="text-red-500 text-sm ">{error.contact}</p>
                  )}
                </div>
                <input
                  type="text"
                  name="pcontact"
                  onChange={Mistake}
                  value={form.pcontact}
                  placeholder="Purpose of Contact"
                  className={`p-3 text-sm w-full md:text-base lg:text-lg outline-none bg-white focus:outline-dotted  ${
                    error.name
                      ? `border border-red-500 text-xs md:text-sm lg:text-lg p-2`
                      : `text-sm md:text-base p-3 lg:text-lg `
                  }`}
                />
                <div>
                  {error.pcontact && (
                      <p className="text-red-500 text-sm ">{error.pcontact}</p>
                    )}
                </div>
                <textarea
                  name="message"
                  id="message"
                  onChange={Mistake}
                  value={form.message}
                  placeholder="Your Message"
                  className={`p-3 text-sm w-full md:text-base lg:text-lg outline-none bg-white focus:outline-dotted  ${
                    error.message
                      ? `border border-red-500 text-xs md:text-sm lg:text-lg p-2`
                      : `text-sm md:text-base p-3 lg:text-lg `
                  }`}
                  
                ></textarea>
                <div>
                  {error.message && (
                      <p className="text-red-500 text-sm ">{error.message}</p>
                    )}
                </div>
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
