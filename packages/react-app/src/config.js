import { Goerli } from "@usedapp/core";


export const ROUTER_ADDRESS = "0x62CB4AF34f9879e09aE624b671E997Ca1e362296"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Uza72i77Rm0JI7mgTMTks135VApNXf3y",
  },
};