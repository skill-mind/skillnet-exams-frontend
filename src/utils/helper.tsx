// STRK SEPOLIA CONTRACT
import { Contract, RpcProvider } from "starknet";
import token_abi from "../lib/token_abi.json"



// STRK SEPOLIA CONTRACT ADDRESS
export const STRK_SEPOLIA: string =
    "0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d";

// RPC PROVIDER
export const provider = new RpcProvider({
    nodeUrl: "https://starknet-sepolia.public.blastapi.io"
  });    

  export function formatCurrency(currency: number) {
    let amount = currency / 1e18;
    return amount;
  }

export const strk_contract = new Contract(token_abi, STRK_SEPOLIA, provider);

export const fetchBalance = async (address: string, setBalance: any) => {
  try {
    const strk = await strk_contract.balanceOf(address);
    // @ts-ignore
      const strkBalance = formatCurrency(strk.toString());
      console.log(strkBalance)
    setBalance(strkBalance);
  } catch (err) {
    console.log(err);
  }
};
