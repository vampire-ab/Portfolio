import React from "react";
import {motion} from "framer-motion"

function Projects() {
  const projects = [1];
  return (
    <motion.div 
    initial = {{
      opacity: 0
    }}
    whileInView = {{
      opacity: 1
    }}
    transition = {{
      duration: 1.5
    }}
    className="h-screen flex flex-col relative text-center md:text-left justify-evenly px-10 mx-auto items-center max-w-screen">
      <h3 className="absolute top-24 text-gray-400 text-2xl tracking-[20px] uppercase">
        Projects
      </h3>
      <div className="reltive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div key = {i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img 
            initial = {{
              y:-300,
              opacity: 0              
            }}
            transition = {{
              duration: 1.2
            }}
            whileInView = {{
              opacity: 1
            }}
            viewport = {{
              once: true
            }}
            src="" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} of {projects.length}: </span> UPS Clone</h4>
              <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque ad inventore. Distinctio saepe placeat nostrum veniam repellendus magnam, dolor debitis, delectus natus dolorum earum similique, explicabo enim voluptatem ipsum.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
