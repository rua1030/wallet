import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain = defineChain(84532);

const contractAddress = "0x31Ec3D576F25B503A09b9564Ac23E48a73f6939c";

const contractAbI =[
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_textToUse",
              "type": "string"
          }
      ],
      "name": "updateTextToUse",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getTextToUse",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
] as const;

export const CONTRACT = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractAbI,
});

