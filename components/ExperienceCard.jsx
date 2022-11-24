import React from "react";
import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[700px] h-[550px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
     overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-20 h-20 rounded-full xl:h-[200px] object-cover object-center"
        src="/images/Chegg.png"
        alt="Company Logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Calculus Expert</h4>
        <p className="font-bold text-2xl mt-2">Chegg</p>
        <div className="flex space-x-2 mt-4">
          <img className="h-10 w-10 rounded-full" src="/images/IntCalculus.jpg" />
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {" "}
          Started Work.. - Ended...
        </p>
        <ul
          className="
        list-disc space-y-4 ml-5 text-lg"
        >
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
