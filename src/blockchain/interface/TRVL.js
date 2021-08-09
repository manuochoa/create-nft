import web3 from "./web3";
import TRVL from "../abi/TRVL.json";

export const TRVLAddress = "0x419c89E7a632784b530706724a46c994bB486FbD";

function TRVL() {
  return new web3.eth.Contract(TRVL.abi, TRVLAddress);
}

export default TRVL;
