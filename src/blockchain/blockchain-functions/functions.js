import NFT1155, { ERC1155Address } from "../interface/NFT1155";

const Moralis = require("moralis");
Moralis.initialize("9jTSEy7eKGdH8EBCOvH5zCYM01TxksUQcItcbfQg");
Moralis.serverURL = "https://dzfl3tiplyqt.usemoralis.com:2053/server";
let currentUser = Moralis.User.current();

export const login = async () => {
  try {
    Moralis.Web3.authenticate().then(function (user) {
      console.log(user.get("ethAddress"));
    });

    return currentUser.get("ethAddress");
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    Moralis.User.logOut().then(() => {
      console.log(Moralis.User.current());
    });
    return currentUser.get("ethAddress");
  } catch (error) {
    console.log(error);
  }
};

export async function uploadFile(data) {
  try {
    const fileToUpload = new Moralis.File(data.name, data);
    fileToUpload.type = data.type;
    await fileToUpload.saveIPFS();

    return fileToUpload;
  } catch (error) {
    console.log(error);
  }
}

export const createMultiNFT = async (NFTDetails) => {
  try {
    let instance = await NFT1155();
    let data = JSON.stringify(NFTDetails);
    console.log(data);
    const newNFT = await instance.methods
      .create(NFTDetails.amount, data, data)
      .send({ from: window.ethereum.selectedAddress });

    console.log(newNFT);
    return newNFT;
  } catch (error) {
    console.log(error);
  }
};

export const getNFTBalance = async () => {
  try {
    const options = {
      chain: "bsc testnet",
      address: window.ethereum.selectedAddress,
    };
    const BscNFT = await Moralis.Web3.getNFTs(options);
    const result = BscNFT.filter((nft) => {
      if (nft.token_address.toUpperCase() === ERC1155Address.toUpperCase()) {
        return true;
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getMarketNFTBalance = async () => {
  try {
    const options = {
      chain: "bsc testnet",
      address: "0x239d34DF6cDa1844E6E2A190C66ea76B9ca902C0",
    };
    const BscNFT = await Moralis.Web3.getNFTs(options);
    const result = BscNFT.filter((nft) => {
      if (nft.token_address.toUpperCase() === ERC1155Address.toUpperCase()) {
        return true;
      }
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const extraInfoNFT = async (id, typeNFT) => {
  if (typeNFT === "ERC1155") {
    try {
      let instance = await NFT1155();
      let extraInfo = await instance.methods.extraInfoMap(id).call();
      return JSON.parse(extraInfo.metaData);
    } catch (error) {
      console.log(error);
    }
  }
};

export const NFTInfo = (URI) => {
  let data = JSON.parse(URI);
  return data;
};
