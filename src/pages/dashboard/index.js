import React, { useEffect, useState } from "react";
import { getNFTBalance } from "../../blockchain/blockchain-functions/functions";
import NFTCard from "./components/NFTCard";
import Grid from "@material-ui/core/Grid";

function Dashboard() {
  const [NFT, setNFT] = useState([]);

  const getNFT = async () => {
    try {
      let NFTBalance = await getNFTBalance();
      setNFT(NFTBalance);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNFT();
  }, []);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <h1>My Accomodations!</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {NFT !== undefined && NFT.length !== 0 ? (
          NFT.map((nft) => {
            return (
              <NFTCard key={nft.token_id + nft.contract_type} props={nft} />
            );
          })
        ) : (
          <h1>No Items Available</h1>
        )}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
