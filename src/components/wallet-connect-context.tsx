"use client"
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { AccountStatus, useAccount, useConnect } from "@starknet-react/core";

// Define the context type
interface WalletContextType {
  isConnected: boolean;
  address: string | undefined;
  isConnecting: boolean;
  isWalletDetected: boolean; // Expose wallet detection state
  error: Error | null;
  isModalOpen: boolean;
  openConnectModal: () => void;
  closeConnectModal: () => void;
}

// Create the context
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Provider component
export function WalletProvider({ children }: { children: ReactNode }) {
  const { isConnected = false, address, status } = useAccount();
  const { connectors } = useConnect();
  const [isWalletDetected, setIsWalletDetected] = useState(false); // Manage wallet detection state
  const [error, setError] = useState<Error | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Check if any wallet is available in the browser
  useEffect(() => {
    const hasWallet = connectors.some(connector => connector.available());
    setIsWalletDetected(hasWallet);
  }, [connectors]);
  
  // Handle connection errors
  useEffect(() => {
    if (status === "error" as AccountStatus) {
      setError(new Error("Failed to connect wallet"));
    } else {
      setError(null);
    }
  }, [status]);
  
  // Function to open the connect modal from anywhere in the app
  const openConnectModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the connect modal
  const closeConnectModal = () => {
    setIsModalOpen(false);
  };
  
  // Context value
  const value = {
    isConnected,
    address,
    isConnecting: status === "connecting",
    isWalletDetected, // Expose wallet detection state
    error,
    isModalOpen,
    openConnectModal,
    closeConnectModal
  };
  
  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

// Custom hook to use the wallet context
export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}