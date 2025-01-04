export const contractABI = [
  {
    inputs: [
      { internalType: "string", name: "_firstName", type: "string" },
      { internalType: "string", name: "_lastName", type: "string" },
      { internalType: "uint256", name: "_birthYear", type: "uint256" },
      { internalType: "string", name: "_nationality", type: "string" },
      { internalType: "string", name: "_postalAddress", type: "string" },
    ],
    name: "saveData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getData",
    outputs: [
      { internalType: "string", name: "firstName", type: "string" },
      { internalType: "string", name: "lastName", type: "string" },
      { internalType: "uint256", name: "birthYear", type: "uint256" },
      { internalType: "string", name: "nationality", type: "string" },
      { internalType: "string", name: "postalAddress", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
];