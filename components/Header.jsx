import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { createClient, configureChains, defaultChains, useAccount, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

function Header() { 
  const { chains, provider, webSocketProvider } = configureChains([chain.mainnet, chain.polygonMumbai, chain.goerli], [
    alchemyProvider({ apiKey: process.env.ALCHEMY_APIKEY }),
    publicProvider(),
  ]);
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
    onDisconnect() {
      console.log('Disconnected')
    },
  })
  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  });
  
  return (
    <header className="sticky mx-auto top-0 flex items-start justify-between max-w-7xl z-20 p-5 xl:items-center">
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
                
      </motion.div>
    </header>
  );
}

export default Header;
