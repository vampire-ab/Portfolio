import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";


function Contact() {

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <p className="decoration-[#F7AB0A]/50 underline">
            Lets Connect
          </p>
        </h4>

        <div className="flex flex-col justify-center items-center">
          <div className="flex sm:flex-row md:flex-row items-center space-x-5 justify-start md:justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+91-9898477901</p>
          </div>
          <div className="flex sm:flex-row md:flex-row items-center space-x-5 justify-start md:justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">brijeshagal@gmail.com</p>
          </div>
          <div className="flex sm:flex-row md:flex-row items-center space-x-5 justify-start md:justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Ahmedabad, India</p>
          </div>
        </div>
      </div>
      <form
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex gap-2 flex-col md:flex-row">
          <input
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            placeholder="Email"
            type="email"
            className="contactInput"
          />
        </div>
        <input
          placeholder="Subject"
          className="contactInput"
        />
        <textarea
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#f7Ab0A] py-5 px-10 rounded-md text-black font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
