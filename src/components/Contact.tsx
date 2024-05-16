import React from "react";

const Contact = () => {
  return (
    <div
      className="h-screen bg-serviceImage bg-cover bg-center"
      id="contactSection"
    >
      <div>
        <h1 className="text-white text-3xl lg:text-9xl text-center p-5 font-serif">
          CONTACT
        </h1>
      </div>
      <div className="flex justify-center items-center pt-10">
        <form className="p-10  rounded shadow-md w-full lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-4 mb-5">
            <div className="flex flex-col w-full lg:w-1/2">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
            </div>
          </div>

          <div className="mb-5">
            <input
              type="text"
              id="text"
              placeholder="Subject"
              className="p-2 border rounded shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-5">
            <textarea
              id="message"
              placeholder="Message"
              className="p-2 border rounded shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 h-64"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-5 py-2 rounded shadow-sm hover:bg-gray-400 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
