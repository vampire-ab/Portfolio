import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SavingsIcon from '@mui/icons-material/Savings';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ABI from "../contracts/BuyGrocery"
//React Pop-up
import Popup from 'reactjs-popup';
//wagmi
import { useContract } from "wagmi";

function Hero() {
  const contract_address = "0x803B6840E5981950dB4e2bb8bEe7c4A191dE2Ecc";
  const [isTipper, setIsTipper] = useState(false);
  const [memos, setMemos] = useState();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState();
  const contract = useContract({
    address: contract_address,
    abi: ABI.abi,
  });
  const tip = async() => {
    const tipTxn = await contract.buyCoffee(
      name ? name : "Anonymous",
      msg ? msg : "Hey, have fun",
      {value: ethers.utils.parseEther(amount)}
    );
  }
  const grocery = async() => {
    const groceryTxn = await contract.buyCoffee(
      name ? name : "Anonymous",
      msg ? msg : "Hey, have fun",
      {value: ethers.utils.parseEther(amount)}
    );
  }
  const words = ["Loves magic", "Socializer", "Optimizer"];
  const words2 = ["Buy Me A Coffee", "Support Me"];
  const [text, count] = useTypewriter({
    words: isTipper ? words2 : words,
    loop: isTipper ? false : true,
    delaySpeed: 2000,
  });
  useEffect(() => {

  }, [memos])
  useEffect(() => {
    if (contract.memos != null)
      setMemos(contract.getMemos());
  }, [])
  useEffect(() => {
  }, [isTipper])
  return (
    <div className="h-screen items-center relative flex flex-col justify-center space-y-8 text-center">
      <BackgroundCircles />

      <img
        className={"relative rounded-full h-32 w-32 mx-auto object-cover " + (isTipper && "hidden")}
        src="/images/myImage.jpg"
        alt="My Image"
      />
      {isTipper ?
        <div
          className="z-10">
          <div className="h-32 max-w-screen-lg overflow-scroll scrollbar-hide">
            {memos != null && memos.map((memo) => {
              <div className="grid grid-cols-3 border-[#F7AB0A] rounded-lg">
                <p className="p-2">{memos.name}</p>
                <p className="p-2">{memos.message}</p>
                <p className="p-2">{memos.item}</p>
              </div>
            })}
          </div>

          <div className="z-10">
            <div className="text-sm uppercase text-gray-400 pb-5">
              <span className="hidden md:inline-flex pr-3">For anonymous tips: </span><span className="text-[#F7AB0A] cursor-pointer hover:opacity-70" onClick={() => { navigator.clipboard.writeText(contract_address) }}>{contract_address} <ContentCopyIcon className="text-sm" /></span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
            <div className="pt-10">            
              <button className="heroButton border-0">
                <CoffeeIcon 
                onClick = {grocery}
                className="text-[#F7AB0A] animate-bounce" />
              </button>
              <button className="heroButton border-0" onClick={() => setIsTipper(false)}>
                <ArrowBackIcon className="text-[#F7AB0A] animate-pulse md:mt-3" />
              </button>
              <button className="heroButton border-0">
                <SavingsIcon 
                onClick = {tip}
                className="text-[#F7AB0A] animate-bounce" />
              </button>

            </div>
          </div>
        </div>
        :
        <div className="z-10">
          <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
            <button className="heroButton" onClick={() => setIsTipper(true)}>Tip Me</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Hero;
