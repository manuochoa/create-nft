import web3 from "./web3";
import Marketplace from "../abi/Marketplace.json";

export const MarketplaceAddress = "0xd0077C08A2a0a231B31bE99355DcAeD0B143b855";

function Marketplace() {
  return new web3.eth.Contract(Marketplace.abi, MarketplaceAddress);
}

export default Marketplace;
