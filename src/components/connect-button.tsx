import React, { useRef, useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  Connector,
} from "@starknet-react/core";
import { AccountTypeModal } from "./account-type-modal";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { WebWalletConnector } from "starknetkit/webwallet";

type ConnectButtonVariant = "default" | "navbar";

interface ConnectButtonProps {
  variant?: ConnectButtonVariant;
  isOpen: boolean;
  isClosed?: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
onSelect: (walletId: string) => void;
}



export function ConnectButton({
  isOpen,
  setIsModalOpen,
  
}: ConnectButtonProps) {
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState<
    "user" | "institution"  | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Customize WebWalletConnector with an icon
  const customizedConnectors = connectors.map((connector) => {
    if (connector instanceof WebWalletConnector) {
      // Recreate the connector with the same network and new icon
      return new WebWalletConnector({});
    }
    return connector;
  });

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: customizedConnectors as StarknetkitConnector[],
  });

  const handleConnect = async () => {
    try {
      const { connector } = await starknetkitConnectModal();
      if (connector) {
        await connect({ connector: connector as Connector });
        setIsFirstTimeUser(true); // Trigger AccountTypeModal after connection
      }
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };
  useEffect(() => {
    if (isOpen && !isConnected) {
      handleConnect();
      //to prevent retrigerring
      setIsModalOpen(false);
    }
  }, [isOpen]);
 

  const handleAccountCreation = () => {
    if (selectedAccountType) {
      console.log(`Creating ${selectedAccountType} account`);
      setIsFirstTimeUser(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <AccountTypeModal
        isOpen={isFirstTimeUser}
        onClose={() => setIsFirstTimeUser(false)}
        selectedType={selectedAccountType}
        onSelectType={setSelectedAccountType}
        onSubmit={handleAccountCreation}
      />
    </div>
  );
}