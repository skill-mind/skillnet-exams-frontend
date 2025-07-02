"use client";

import StarknetProvider from "./StarknetProvider";
import { WalletProvider } from "./wallet-connect-context";


export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StarknetProvider>
      <WalletProvider>
     
          {children}
      
      </WalletProvider>
    </StarknetProvider>
  );
} 