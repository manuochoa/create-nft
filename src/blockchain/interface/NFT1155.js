import web3 from "./web3";
import ERC1155 from "../abi/ERC1155.json";

export const ERC1155Address = "0x9a72D2a7689Dd8794fdD78A495647B0285C6d413";

function NFT1155() {
  return new web3.eth.Contract(ERC1155.abi, ERC1155Address);
}

export default NFT1155;
