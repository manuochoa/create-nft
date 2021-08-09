import React from "react";
// import { useWallet, UseWalletProvider } from "use-wallet";
import { BiWallet } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import { login } from "../../blockchain/blockchain-functions/functions";
import "./walletbutton.scss";

function WalletButton() {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className="connect_wallect"
        onClick={login}
        startIcon={<BiWallet />}
      >
        Connect wallet
      </Button>
    </>
  );
}

export default WalletButton;
