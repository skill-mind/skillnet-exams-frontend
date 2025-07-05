import { clsx, type ClassValue } from "clsx";
import { CairoCustomEnum, RpcProvider } from "starknet";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to shorten address
export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Helper function to convert hex to decimal and format it
export const formatAmount = (hex: string) => {
  const decimal = parseInt(hex, 16);
  return decimal.toString();
};

export const myProvider = new RpcProvider({
  nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
});

// For converting Hex to contract address
export function bigIntToHex(value: bigint): `0x${string}` {
  return `0x${value.toString(16)}`;
}

export function toEpochTime(date: string | Date): number {
  const d = typeof date === "string" ? new Date(date) : date;
  return Math.floor(d.getTime() / 1000);
}

export function createCairoEnum(value: string): CairoCustomEnum {
  return new CairoCustomEnum({ [value]: {} });
}
