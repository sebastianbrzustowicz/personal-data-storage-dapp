import { useState } from "react";
import { ethers, BrowserProvider } from "ethers";
import { toast } from "react-toastify";
import { contractABI } from "../../dto/contractABI";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

export const useBlockchainData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    nationality: "",
    postalAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const tx = await contract.saveData(
        formData.firstName,
        formData.lastName,
        parseInt(formData.birthYear),
        formData.nationality,
        formData.postalAddress
      );
      await tx.wait();

      toast.success("Data saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save data.");
    }
  };

  return { formData, handleChange, saveData };
};
