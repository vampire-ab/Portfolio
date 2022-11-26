import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

//Configure
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_APIKEY }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "myportfolio",
  chains,
});
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
