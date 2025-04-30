"use client";

import AnimationWrapper from "@/motion/Animation-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface WalletDisconnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDisconnect: () => void;
}

export default function WalletDisconnectModal({
  isOpen,
  onClose,
  onDisconnect,
}: WalletDisconnectModalProps) {


  //pathname check
  const pathName = usePathname();
  const userDashboardPath = "/dashboard/user";
  const institutionDashboardPath = "/dashboard/institution";

  //router
  const router = useRouter();
      
  const handleDisconnect = () => {
    if (
      userDashboardPath === pathName ||
      institutionDashboardPath === pathName
    ) {
      router.push("/"); // ■ now safe to navigate
    }
    onDisconnect();
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
            className="relative w-full max-w-sm rounded-2xl bg-[#0a0b1e] p-6 shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between mb-8 px-10">
              <h2 className="text-xl font-semibold text-white">
                Disconnect Wallet
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <AnimationWrapper variant="fadeIn" delay={0.1}>
              <p className="text-gray-300 mb-6 text-center">
                Are you sure you want to disconnect your wallet?
              </p>
            </AnimationWrapper>

            <div className="flex justify-between gap-2 mt-8">
              <button
                className=" w-full rounded-[48px] text-center border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                className=" py-3 w-full text-center rounded-[48px] bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors"
                onClick={handleDisconnect}
              >
                Disconnect Wallet
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
 