
"use client";

import AnimationWrapper from "@/motion/Animation-wrapper";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useWalletContext } from "./WalletProvider";
import { ConnectButton } from "./connect-button";
import WalletDisconnectModal from "./Wallet-disconnect-modal";

// Utility to shorten wallet address
const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
};

const Hero = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);

  const { account, connectWallet, disconnectWallet, connectors } = useWalletContext();

  // Close connect modal once wallet is connected
  useEffect(() => {
    if (account) {
      setIsConnectModalOpen(false);
    }
  }, [account]);

  const handleWalletSelect = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) {
      connectWallet(connector);
    }
  };

  const handleLaunchAppClick = () => {
    if (account) {
      setIsDisconnectModalOpen(true); // Already connected → show disconnect modal
    } else {
      setIsConnectModalOpen(true); // Not connected → show connect modal
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setIsDisconnectModalOpen(false);
  };

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4 text-center">
        <AnimationWrapper variant="fadeIn">
          <h1 className="text-3xl md:text-[60px] font-bold mb-4 md:leading-[90px] tracking-tight">
            REVOLUTIONIZING ACADEMIC
            <br />
            RECORDS & CREDENTIALING
          </h1>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.2}>
          <p className="text-[#EAEDE7] text-lg max-w-3xl mx-auto mb-10">
            Blockchain powered, AI-proctored exams with verifiable credentials
            that ensure trust, security, and transparency.
          </p>
        </AnimationWrapper>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <AnimationWrapper variant="slideRight" delay={0.3}>
            <button
              onClick={handleLaunchAppClick}
              className="px-8 py-3 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-700 transition-colors"
            >
              {account ? shortenAddress(account) : "Launch App"}
            </button>
          </AnimationWrapper>

          <AnimationWrapper variant="slideLeft" delay={0.3} className="mt-3">
            <Link
              href="#how-it-works"
              className="px-8 py-3 rounded-full border  border-teal-700 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </AnimationWrapper>
        </div>

        {/* Grid features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
          {[
            {
              name: "SkillNet Records",
              color: "bg-[#A8C789]",
              border: "border-[#A8C789]",
            },
            {
              name: "AI Proctoring",
              color: "bg-[#C7A289]",
              border: "border-[#C7A289]",
            },
            {
              name: "NFT Certificate",
              color: "bg-[#89C2C7]",
              border: "border-[#89C2C7]",
            },
            {
              name: "Secure & Transparent",
              color: "bg-[#AE89C7]",
              border: "border-[#AE89C7]",
            },
          ].map((item, index) => (
            <AnimationWrapper
              key={item.name}
              variant="scale"
              delay={0.4 + index * 0.1}
            >
              <div
                className={`mb-3 border ${item.border} border-opacity-40 p-4 rounded-[38px] w-[70%]`}
              >
                <div
                  className={`border ${item.border} border-opacity-60 p-4 rounded-[28px]`}
                >
                  <div
                    className={`border ${item.border} border-opacity-80 p-4 rounded-[18px] flex items-center justify-center`}
                  >
                    <Image
                      src="/landing/Courses.svg"
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2 py-4 -mt-10 rounded-lg border border-[#272727] bg-[#0A1330] w-[70%] ml-20">
                <div className={`w-8 h-8 rounded-full ${item.color}`}></div>
                <span className="text-sm">{item.name}</span>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>

      {/* Connect modal */}
      <ConnectButton
        isOpen={isConnectModalOpen}
        onSelect={handleWalletSelect}
        setIsModalOpen={setIsConnectModalOpen}
      />

      {/* Disconnect modal */}
      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </section>
  );
};

export default Hero;
