import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useEffect, useState } from "react";
//wagmi
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useContract, useContractRead } from "wagmi";

//Abi
import ABI from "../contracts/BuyGrocery";

export default function Home() {
  const contract_address = "0x803B6840E5981950dB4e2bb8bEe7c4A191dE2Ecc";
  
  const [memos, setMemos] = useState();


  const { address, connector, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  // Gets details about the contract.
  const contract = useContract({
    address: contract_address,
    abi: ABI.abi,
  });

  // const { data, isError, isLoading } = useContractRead({
  //   address: contract_address,
  //   abi: ABI.abi,
  //   functionName: "getGrocery",
  // });  

  // console.log("Data = "+data);
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 h-screen">
      <Head>
        <title>vampireAb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
