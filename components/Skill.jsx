import React from "react";
import { motion } from "framer-motion";


function Skill({directionLeft}) {
  return (
    <div className="group rlative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="/images/Cpp.png"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out z-0"
      />
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          x: 0
        }}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-32 xl:h-32 rounded-full z-10"
      >
        <div className="flex items-center justify-center h-full">
          <p className="opacity-100 text-3xl font-bold text-black">100%</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;
