import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ABI from "../contracts/BuyGrocery"

function Header() { 
  
  return (
    <header className="sticky mx-auto top-0 flex items-center justify-center md:items-start md:justify-between max-w-7xl z-20 p-5 xl:items-center md:flex-row flex-col">
      <motion.div
      initial = {{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate ={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
       className="flex flex-row items-center justify-center">
        <SocialIcon
          className="cursor-pointer"
          url="https://twitter.com/AgalBrijesh"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          className="cursor-pointer"
          url="https://www.linkedin.com/in/brijesh-agal/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://github.com/vampire-ab"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url=""
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <p className="uppercase hidden md:inline-flex text-sm md:text-gray-300">
          Get in Touch
        </p> */}
      </motion.div>
      <motion.div 
      initial = {{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate ={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="flex flex-row items-center text-gray-400 cursor-pointer">
          <ConnectButton className="hover:opacity-0" />
      </motion.div>
    </header>
  );
}

export default Header;
