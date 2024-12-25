import { ethers } from "ethers";

// Dirección del contrato y ABI
export const CONTRACT_ADDRESS = "0x31Ec3D576F25B503A09b9564Ac23E48a73f6939c";

export const CONTRACT_ABI = [
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
];

// Proveedor de Avalanche Fuji (usando JSON-RPC público)
export const provider = new ethers.JsonRpcProvider(
  "https://api.avax-test.network/ext/bc/C/rpc"
);
