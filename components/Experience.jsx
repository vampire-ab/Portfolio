import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col 
    text-left md:flex-row justify-evenly items-center px-10 max-w-full mx-auto"
    >
      <h3
        className="absolute top-16 uppercase tracking-[20px]
       text-gray-400 text-2xl"
      >
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory snap-x">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
