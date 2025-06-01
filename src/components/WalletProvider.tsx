"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import {
  useConnect,
  useAccount,
  useDisconnect,
  Connector,
  ConnectVariables
} from "@starknet-react/core";

interface WalletContextProps {
  account: string | null;
  connectors: Connector[]; // ← Exposed connectors
  connectWallet: (connector: Connector) => void; // ← Takes connector arg
  disconnectWallet: () => void;
  connectAsync: (args?: ConnectVariables) => Promise<void>;
}

const WalletContext = createContext<WalletContextProps>({
  account: null,
  connectors: [], // ← Default empty
  connectWallet: () => {},
  disconnectWallet: () => {},
  connectAsync: () => Promise.resolve(),
});

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { connect, connectors, connectAsync } = useConnect();
  const { address } = useAccount();

  const { disconnect } = useDisconnect();

  // Accept a specific connector when connecting
  const connectWallet = useCallback(
    (connector: Connector) => {
      connect({ connector });
    },
    [connect]
  );

  // Save wallet address to localStorage when connected
  useEffect(() => {
    if (address) {
      localStorage.setItem("walletAddress", address);
    } else {
      localStorage.removeItem("walletAddress");
    }
  }, [address]);

  return (
    <WalletContext.Provider
      value={{
        account: address ?? null,
        connectors, // ← Now available to consumers
        connectWallet, // ← Can specify which connector
        disconnectWallet: disconnect,
        connectAsync,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};


export const useWalletContext = () => {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    throw new Error("useWalletContext must be inside WalletProvider");
  }
  return ctx;
};
