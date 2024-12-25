import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI, provider } from "@/utils/contractConfig";

// Inicializar el contrato
const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

// Obtener texto
export const getText = async (): Promise<string> => {
  try {
    const text = await contract.getTextToUse();
    return text;
  } catch (error) {
    console.error("Error obteniendo texto:", error);
    throw new Error("No se pudo obtener el texto.");
  }
};

// Actualizar texto
export const updateText = async (text: string, signer: ethers.Signer): Promise<void> => {
  try {
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.updateTextToUse(text);
    await tx.wait();
  } catch (error) {
    console.error("Error actualizando texto:", error);
    throw new Error("No se pudo actualizar el texto.");
  }
};
