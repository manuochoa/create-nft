import React from "react";
import { useWallet, UseWalletProvider } from "use-wallet";
import { BiWallet } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import './walletbutton.scss'

function WalletButton() {
  const wallet = useWallet();

  const connectWallet = async (e) => {
    e.preventDefault();
    await wallet.connect();
  };

  return (
    <>
      {/* <button className="text-center" >
           
      </button> */}
      <Button
        variant="contained"
        color="dark"
        className="connect_wallect"
        onClick={connectWallet}
        startIcon={<BiWallet/>}
      >
        Connect wallet
      </Button>
    </>
  );
}

export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: "my-dapp-id-123-xyz" },
    }}
  >
    <WalletButton />
  </UseWalletProvider>
);
