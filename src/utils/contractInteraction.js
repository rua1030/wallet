import { ethers } from "ethers";

const contractAddress = "0x31Ec3D576F25B503A09b9564Ac23E48a73f6939c";
const contractABI = [
  {
    "inputs": [],
    "name": "getTextToUse",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [{ "internalType": "string", "name": "_textToUse", "type": "string" }],
    "name": "updateTextToUse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
];

// Inicializar contrato con Metamask
export async function initializeContract() {
  try {
    if (!window.ethereum) {
      throw new Error("Metamask no está instalado. Por favor, instala Metamask para continuar.");
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Solicitar acceso a las cuentas
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return { provider, signer, contract };
  } catch (error) {
    handleError("Error al inicializar contrato con Metamask", error);
    throw error;
  }
}

export async function getText() {
  try {
    const provider = new ethers.providers.JsonRpcProvider("https://api.avax-test.network/ext/bc/C/rpc");
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const text = await contract.getTextToUse();
    return text;
  } catch (error) {
    handleError("Error al obtener texto del contrato", error);
    throw error;
  }
}


export const updateText = async (newText) => {
  try {
    const contract = await initializeContract();
    const signer = contract.signer;

  
    const balance = await signer.getBalance();
    const minimumBalance = ethers.utils.parseEther("0.01"); // Cambia el valor según lo necesario

    if (balance.lt(minimumBalance)) {
      throw new Error(
        "Saldo insuficiente en MetaMask para realizar esta transacción."
      );
    }

    const tx = await contract.updateTextToUse(newText, {
      gasLimit: 300000, // Asegura suficiente gas
    });

    console.log("Transacción enviada:", tx.hash);
    await tx.wait(); // Esperar confirmación de la transacción
    console.log("Texto actualizado correctamente.");
  } catch (error) {
    if (error.code === 4001) {
      throw new Error("Transacción cancelada por el usuario.");
    } else if (error.code === -32000) {
      throw new Error("Error de gas o saldo insuficiente.");
    }
    throw error;
  }
};
