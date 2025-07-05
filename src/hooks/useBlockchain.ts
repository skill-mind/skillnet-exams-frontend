import { myProvider } from "@/lib/utils";
import {
  useBlockNumber,
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Abi, Account, CallData, Contract, RpcProvider } from "starknet";

export const FORTICHAIN_CONTRACT_ADDRESS =
  "0x0353bbcf8d11dad6fd7fd2eec371142ae6a38bc3c2fab5a35a91a1796f11c56d";
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN || "";

// Utility function to perform contract read operations
export function useContractFetch(
  abi: Abi,
  functionName: string,
  args: any[] = []
) {
  const {
    data: readData,
    refetch: dataRefetch,
    isError: readIsError,
    isLoading: readIsLoading,
    error: readError,
    isFetching: readRefetching,
  } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: FORTICHAIN_CONTRACT_ADDRESS,
    args: args,
    refetchInterval: 600000,
  });

  return {
    readData,
    dataRefetch,
    readIsError,
    readIsLoading,
    readError,
    readRefetching,
  };
}

// Utility function to perform contract write operations
export function useContractWriteUtility(
  functionName: string,
  args: any[],
  abi: Abi
) {
  const { contract } = useContract({
    abi,
    address: FORTICHAIN_CONTRACT_ADDRESS,
  });

  const calls = useMemo(() => {
    if (
      !contract ||
      !args ||
      args.some(
        (arg) => arg === undefined || arg === null || arg === "0x" || arg === ""
      )
    ) {
      return undefined;
    }

    return [contract.populate(functionName, args)];
  }, [contract, functionName, args]);

  const {
    send: writeAsync,
    data: writeData,
    isPending: writeIsPending,
  } = useSendTransaction({ calls });

  const {
    isLoading: waitIsLoading,
    data: waitData,
    status: waitStatus,
    isError: waitIsError,
    error: waitError,
  } = useTransactionReceipt({
    hash: writeData?.transaction_hash,
    watch: true,
  });

  return {
    writeAsync,
    writeData,
    writeIsPending,
    waitIsLoading,
    waitData,
    waitStatus,
    waitIsError,
    waitError,
    calls,
  };
}

// Utility function to get contract events
type ContractEvent = {
  from_address: string;
  keys: string[];
  data: string[];
};

export function useContractEvents(
  enabled: boolean = true,
  interval: number = 3000,
  limit: number = 5
) {
  const provider = useMemo(
    () => new RpcProvider({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL! }),
    []
  );
  const [events, setEvents] = useState<ContractEvent[]>([]);
  const lastCheckedBlockRef = useRef(0);
  const { data: blockNumber } = useBlockNumber({ refetchInterval: interval });

  const checkForEvents = useCallback(
    async (currentBlockNumber: number) => {
      if (
        !FORTICHAIN_CONTRACT_ADDRESS ||
        currentBlockNumber <= lastCheckedBlockRef.current
      ) {
        return;
      }

      try {
        const fromBlock = lastCheckedBlockRef.current + 1;
        const fetchedEvents = await provider.getEvents({
          address: FORTICHAIN_CONTRACT_ADDRESS,
          from_block: { block_number: fromBlock },
          to_block: { block_number: currentBlockNumber },
          chunk_size: 500,
        });

        if (fetchedEvents?.events?.length) {
          setEvents((prev) => [...prev, ...fetchedEvents.events]);
        }

        lastCheckedBlockRef.current = currentBlockNumber;
      } catch (error) {
        console.error("Error checking for events:", error);
      }
    },
    [FORTICHAIN_CONTRACT_ADDRESS, provider]
  );

  useEffect(() => {
    if (enabled && FORTICHAIN_CONTRACT_ADDRESS && blockNumber) {
      checkForEvents(blockNumber);
    }
  }, [FORTICHAIN_CONTRACT_ADDRESS, blockNumber, checkForEvents, enabled]);

  const lastEvents = useMemo(() => {
    return [...events].reverse().slice(0, limit);
  }, [events, limit]);

  return {
    events,
    lastEvents,
    total: events.length,
  };
}

export async function readContractWithStarknetJs(
  functionName: string,
  args: any[] = []
): Promise<any> {
  const provider = new RpcProvider({
    nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
  });

  // Get the contract ABI from the chain
  const { abi } = await provider.getClassAt(FORTICHAIN_CONTRACT_ADDRESS);
  if (!abi) {
    throw new Error("No ABI found for the contract.");
  }

  // Instantiate contract
  const contract = new Contract(abi, FORTICHAIN_CONTRACT_ADDRESS, provider);

  // Dynamically call the function
  if (typeof contract[functionName] !== "function") {
    throw new Error(
      `Function '${functionName}' does not exist on the contract.`
    );
  }

  const result = await contract[functionName](...args);
  return result;
}

export async function readTokenBalance(
  tokenContractAddress: `0x{string}`,
  address: `0x{string}`
) {
  const provider = new RpcProvider({
    nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
  });

  // Get the contract ABI from the chain
  const { abi } = await provider.getClassAt(tokenContractAddress);
  if (!abi) {
    throw new Error("No ABI found for the contract.");
  }

  // Instantiate contract
  const contract = new Contract(abi, tokenContractAddress, provider);

  // Dynamically call the function
  if (typeof contract["balance_of"] !== "function") {
    throw new Error(`Function 'balance_of' does not exist on the contract.`);
  }

  const result = await contract["balance_of"](address);

  return result;
}

export async function writeContractWithStarknetJs(
  account: Account,
  entrypoint: string,
  args: any //Object of arguments e.g. {uri: "1234"}
) {
  const result = await account.execute({
    contractAddress: FORTICHAIN_CONTRACT_ADDRESS,
    entrypoint,
    calldata: CallData.compile(args),
  });

  const status = await myProvider.waitForTransaction(result.transaction_hash);

  return { result, status };
}

export const fetchContentFromIPFS = async (cid: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN}`
    );
    const data = await response.json();

    return { ...data, cid: cid };
  } catch (error) {
    console.error(`Error fetching data for CID ${cid}:`, error);
    return null;
  }
};

export const uploadImageToPinata = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`https://api.pinata.cloud/pinning//pinFileToIPFS`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Image upload to Pinata failed");
  }

  const data = await res.json();
  return data.IpfsHash;
};

export const uploadJSONToPinata = async (jsonData: object): Promise<string> => {
  const res = await fetch(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    body: JSON.stringify(jsonData),
  });

  if (!res.ok) {
    throw new Error("Metadata upload to Pinata failed");
  }

  const data = await res.json();
  return data.IpfsHash;
};
