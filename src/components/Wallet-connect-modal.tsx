// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import Image from "next/image";
// import AnimationWrapper from "@/motion/Animation-wrapper";
// import { useWalletContext } from "./WalletProvider";
// import { useRouter } from "next/navigation";

// interface WalletOption {
//   id: string;
//   name: string;
//   icon: string;
// }

// interface WalletConnectModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelect: (wallet: string) => void;
// }

// export default function WalletConnectModal({
//   isOpen,
//   onClose,
// }: WalletConnectModalProps) {
//   const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
//   const { connectors, connectAsync, account } = useWalletContext();
//   const router = useRouter();


//   const handleSelect = (walletId: string) => {
//     setSelectedWallet(walletId);
//   };

//   // ② On confirm, look up the connector object and call connectWallet
//   const handleConfirm = async () => {
//     if (!selectedWallet) return;

//     const connector = connectors.find((c) => c.id === selectedWallet);
//     if (!connector) {
//       console.error("Connector not found:", selectedWallet);
//       return;
//     }

//     try {
//       await connectAsync({ connector }); // ■ await the wallet prompt
//       router.push("/role"); // ■ now safe to navigate
//       onClose();
//     } catch (err) {  
//       console.error("Wallet connection failed:", err); // ■ handle rejections
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.2,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       transition: {
//         duration: 0.2,
//         ease: "easeIn",
//       },
//     },
//   };

//   const backdropVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   // helper to get icon source
//   function getIconSource(
//     icon: string | { dark: string; light: string }
//   ): string {
//     if (typeof icon === "string") {
//       // If it's a string, use it directly
//       return icon;
//     } else {
//       // If it's an object, use the dark variant (or light, as needed)
//       return icon.dark; // Or icon.light, depending on your theme
//     }
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <motion.div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             variants={backdropVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             onClick={onClose}
//           />

//           <motion.div
//             className="relative w-full max-w-md rounded-2xl bg-[#0a0b1e] p-6 shadow-xl"
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-semibold text-white">
//                 Connect Wallet
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <p className="text-gray-300 mb-4 text-center">
//               Choose a wallet you want to connect to SkillNet
//             </p>

//             <div className="space-y-3 mb-6">
//               {connectors.map((wallet, index) => (
//                 <AnimationWrapper
//                   key={wallet?.id}
//                   variant="slideRight"
//                   delay={index * 0.1}
//                 >
//                   <button
//                     className={`w-full flex items-center gap-3 p-3 rounded-full border border-gray-700 hover:border-gray-500 transition-colors ${
//                       selectedWallet === wallet.id
//                         ? "border-teal-500 bg-[#0d0e24]"
//                         : ""
//                     }`}
//                     onClick={() => handleSelect(wallet.id)}
//                   >
//                     <div
//                       className={`w-8 h-8 rounded-full flex items-center justify-center`}
//                     >
//                       <div className="">
//                         <Image
//                           src={getIconSource(wallet.icon)}
//                           alt={wallet.name}
//                           width={30}
//                           height={30}
//                           className="object-contain"
//                         />
//                       </div>
//                     </div>
//                     <span className="text-white">{wallet.name}</span>
//                   </button>
//                 </AnimationWrapper>
//               ))}
//             </div>

//             {/* ③ Confirmation button */}
//             <AnimationWrapper variant="slideUp" delay={0.3}>
//               <button
//                 onClick={handleConfirm}
//                 disabled={!selectedWallet}
//                 className={`w-full py-3 rounded-full text-white font-medium transition-colors ${
//                   selectedWallet
//                     ? "bg-teal-500 hover:bg-teal-600"
//                     : "bg-gray-700 cursor-not-allowed"
//                 }`}
//               >
//                 Connect
//               </button>
//             </AnimationWrapper>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  Connector,
} from "@starknet-react/core";
import { ChevronsUpDown, X } from "lucide-react";
// import { AccountTypeModal } from "./account-type-modal";
import Link from "next/link";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { WebWalletConnector } from "starknetkit/webwallet";

type ConnectButtonVariant = "default" | "navbar";

interface ConnectButtonProps {
  variant?: ConnectButtonVariant;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const truncateAddress = (address?: string) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export function ConnectButton({
  variant = "default",
  isModalOpen,
  setIsModalOpen,
}: ConnectButtonProps) {
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  // const [selectedAccountType, setSelectedAccountType] = useState<
  //   "project-owner" | "security-researcher" | "validator" | null
  // >(null);
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

  // const handleConnect = async () => {
  //   try {
  //     const { connector } = await starknetkitConnectModal();
  //     if (connector) {
  //       await connect({ connector: connector as Connector });
  //       setIsFirstTimeUser(true); // Trigger AccountTypeModal after connection
  //     }
  //   } catch (error) {
  //     console.error("Connection failed:", error);
  //   }
  // };
  useEffect(() => {
    if (isModalOpen && !isConnected) {
      handleConnect();
      //to prevent retrigerring
      setIsModalOpen(false);
    }
  }, [isModalOpen]);
  const handleDisconnect = () => {
    disconnect();
    setIsDropdownOpen(false);
  };

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
      {isConnected && address ? (
        <div
          className={`relative z-40 ${
            variant === "default" ? "mx-auto w-fit" : ""
          }`}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 border border-[#6B6668] text-white transition-colors ${
              variant === "navbar"
                ? "rounded px-4 py-2"
                : "rounded-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-semibold"
            }`}
            aria-label="Account menu"
          >
            {truncateAddress(address)}
            <ChevronsUpDown className="w-4 h-4" />
          </button>

          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-2 bg-[#1d1f1c] overflow-hidden shadow-lg z-10 ${
                variant === "default"
                  ? "rounded-lg px-8 py-3 sm:py-4 md:py-5 text-base font-semibold w-fit"
                  : "rounded-md w-48"
              }`}
            >
              <button
                onClick={handleDisconnect}
                className="w-full text-left px-4 py-2 bg-[#FF3737] transition-colors"
              >
                <Link href={"/"}>Disconnect Wallet</Link>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className={`bg-[#0000FF] text-white hover:bg-blue-700 transition-colors ${
            variant === "navbar"
              ? "rounded px-4 py-2"
              : "rounded-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-semibold"
          }`}
          aria-label="Connect wallet"
        >
          Connect Wallet
        </button>
      )}

      {/* <AccountTypeModal
        isOpen={isFirstTimeUser}
        onClose={() => setIsFirstTimeUser(false)}
        selectedType={selectedAccountType}
        onSelectType={setSelectedAccountType}
        onSubmit={handleAccountCreation}
      />
    </div> */}
  );
}