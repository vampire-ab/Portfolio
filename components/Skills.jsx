import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  return (
    <motion.div
    initial = {{
      opacity: 0
    }}
    animate = {{
      opacity: 1
    }}
    transition = {{
      duration: 1.5
    }}
      className="h-screen flex flex-col relative md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center
    mx-auto items-center xl:space-y-0     
    "
    >
      <h3
        className="absolute top-24 uppercase  tracking-[20px]
      text-2xl text-gray-400"
      >
        Skills
      </h3>
      <h3
        className="absolute top-36 uppercase 
      tracking-[3px] text-gray-400 
      text-sm"
      >
        Hover over a skill for proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
