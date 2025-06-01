"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationWrapper from "@/motion/Animation-wrapper";
import WalletConnectModal from "./Wallet-connect-modal";
import WalletDisconnectModal from "./Wallet-disconnect-modal";

// starknet imports
import { useWalletContext } from "./WalletProvider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { account, connectWallet, disconnectWallet, connectors } =
    useWalletContext();

 

  // Close dropdown when clicking outside
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleWalletSelect = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) {
      connectWallet(connector); // invoke Starknet-React’s useConnect() :contentReference[oaicite:3]{index=3}
    }
    setIsConnectModalOpen(false);
  };

  const handleConnectWallet = () => {
    setIsConnectModalOpen(true);
  };

  const handleWalletClick = () => {
    setIsDisconnectModalOpen(true);
  };

  const handleDisconnect = () => {
    disconnectWallet(); // real Starknet-React disconnect :contentReference[oaicite:4]{index=4}
    setIsDisconnectModalOpen(false);
  };

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Benefits", href: "/#benefits" },
    { name: "FAQs", href: "/#faqs" },
  ];

  return (
    <>
      <header className="mt-5 fixed w-full z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between bg-[#0A1330] rounded-[48px]">
          <AnimationWrapper variant="slideRight">
            <Link href="/" className="flex items-center">
              <Image
                src="/landing/SkillNetLogo.svg"
                alt="SkillNet"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </AnimationWrapper>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[#FCFCFC]">
            {navLinks.map((link) => (
              <AnimationWrapper variant="slideRight">
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </AnimationWrapper>
            ))}
          </nav>

          {/* Wallet Connection Button or Connected Wallet */}
          <div className="hidden md:block">
            <AnimationWrapper variant="slideLeft">
              {!account ? (
                <button
                  onClick={handleConnectWallet}
                  className="px-5 py-2 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors"
                >
                  Connect Wallet
                </button>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={handleWalletClick}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e24] border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full border-2 border-teal-500 overflow-hidden">
                      <Image
                        src="/landing/Avater.svg"
                        alt="Wallet Avatar"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white font-medium">
                      {account.slice(0, 6)}…{account.slice(-4)}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown();
                      }}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-white transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {/* Custom Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0d0e24] border border-gray-800 overflow-hidden">
                      <div className="py-1">
                        <button
                          onClick={handleWalletClick}
                          className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition-colors"
                        >
                          Disconnect
                        </button>
                        <Link
                          href="/role/"
                          className="w-full block text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition-colors"
                        >
                          View Profile
                        </Link>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 transition-colors">
                          Settings
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </AnimationWrapper>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <AnimationWrapper variant="slideLeft">
              {!account ? (
                <button
                  onClick={handleConnectWallet}
                  className="px-4 py-1.5 mr-4 rounded-full bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors"
                >
                  Connect Wallet
                </button>
              ) : (
                <div
                  onClick={handleWalletClick}
                  className="flex items-center gap-2 px-2 py-1 mr-4 rounded-full bg-[#0d0e24] border border-gray-800 cursor-pointer"
                >
                  <div className="h-6 w-6 rounded-full border border-teal-500 overflow-hidden">
                    <Image
                      src="/icons/braavos.png"
                      alt="Wallet Avatar"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {account.slice(0, 6)}…{account.slice(-4)}
                  </span>
                </div>
              )}
            </AnimationWrapper>

            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[#0a0b1e]"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <AnimationWrapper
                    key={link.name}
                    variant="slideRight"
                    delay={index * 0.1}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </AnimationWrapper>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <WalletConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onSelect={handleWalletSelect}
      />

      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </>
  );
}
