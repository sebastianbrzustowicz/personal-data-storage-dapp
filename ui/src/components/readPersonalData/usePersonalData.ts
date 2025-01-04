import { useState, useEffect } from "react";
import { ethers, BrowserProvider } from "ethers";
import { contractABI } from "../../dto/contractABI";

interface PersonData {
  firstName: string;
  lastName: string;
  birthYear: number;
  nationality: string;
  postalAddress: string;
}

const usePersonalData = () => {
  const [personData, setPersonData] = useState<PersonData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window.ethereum === "undefined") {
        setError("MetaMask is not installed.");
        setIsLoading(false);
        return;
      }

      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {
        const data = await contract.getData();
        const personData: PersonData = {
          firstName: data[0],
          lastName: data[1],
          birthYear: Number(data[2]),
          nationality: data[3],
          postalAddress: data[4]
        };
        setPersonData(personData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data from the blockchain.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { personData, error, isLoading };
};

export default usePersonalData;
