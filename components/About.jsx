import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      className="h-screen flex flex-col md:flex-row relative text-center md:text-left justify-evenly 
    px-10 mx-auto items-center max-w-7xl"
    >
      <h3 className="absolute top-24 text-gray-400 text-2xl tracking-[20px] uppercase">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mt-28 md:mb-0 flex-shrink-0 
        w-40 h-40 rounded-full object-cover md:rounded-lg md:w-56
        md:h-80 xl:w-[400px] xl:h-[500px] object-top"
        src="/images/MeSwag.jpg"
        alt="The cool me!"
      />
      <div className="mt-18 md:space-y-10 px-0 md:px-10">
        <h4 className="mb-8 text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          I'm vampireAb (Brijesh).
        </p>
      </div>
    </div>
  );
}

export default About;
