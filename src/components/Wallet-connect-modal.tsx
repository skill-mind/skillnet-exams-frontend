"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "@/motion/Animation-wrapper";

interface WalletOption {
  id: string;
  name: string;
  icon: string;
}

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (wallet: string) => void;
}

const walletOptions: WalletOption[] = [
  {
    id: "braavos",
    name: "Braavos",
    icon: "/landing/Bravologo.svg",
  },
  {
    id: "argent-mobile",
    name: "Argent Mobile",
    icon: "/landing/Argentlogo.svg",
  },
  {
    id: "argent-web",
    name: "Argent Web",
    icon: "/landing/Argentlogo.svg",
  },
];

export default function WalletConnectModal({
  isOpen,
  onClose,
  onSelect,
}: WalletConnectModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleSelect = (walletId: string) => {
    setSelectedWallet(walletId);
  };

  const handleConfirm = () => {
    if (selectedWallet) {
      onSelect(selectedWallet);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-[#0a0b1e] p-6 shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">
                Connect Wallet
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-gray-300 mb-4 text-center">
              Choose a wallet you want to connect to SkillNet
            </p>

            <div className="space-y-3 mb-6">
              {walletOptions.map((wallet, index) => (
                <AnimationWrapper
                  key={wallet.id}
                  variant="slideRight"
                  delay={index * 0.1}
                >
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-full border border-gray-700 hover:border-gray-500 transition-colors ${
                      selectedWallet === wallet.id
                        ? "border-teal-500 bg-[#0d0e24]"
                        : ""
                    }`}
                    onClick={() => handleSelect(wallet.id)}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center`}
                    >
                      <div className="">
                        <Image
                          src={wallet.icon || "/placeholder.svg"}
                          alt={wallet.name}
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-white">{wallet.name}</span>
                  </button>
                </AnimationWrapper>
              ))}
            </div>

            <AnimationWrapper variant="slideUp" delay={0.3}>
              <button
                className={`w-full py-3 rounded-full text-white font-medium transition-colors ${
                  selectedWallet
                    ? "bg-teal-500 hover:bg-teal-600"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
                onClick={handleConfirm}
                disabled={!selectedWallet}
              >
                Select
              </button>
            </AnimationWrapper>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
