"use client";

import type React from "react";

import { Bell, MoreVertical, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useWalletContext } from "@/useContext/WalletContext";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { WalletSelectorUI } from "@/components/WalletConnectModal";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Wallet connection hooks
  const { account, disconnectWallet } = useWalletContext();
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();

  // Track connection status for UI updates
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Update connecting state based on status
    if (status === "connecting") {
      setIsConnecting(true);
    } else {
      setIsConnecting(false);
    }
  }, [status]);

  const isActive = (route: string) => {
    if (route === "") return pathname === "/dashboard/exam-page"; // Ensure base page is checked
    return pathname.startsWith(`/dashboard/exam-page/${route}`);
  };

  // Helper function to truncate the wallet address
  const truncateAddress = (addr: string) => {
    if (!addr) return "Connect Wallet";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        isModalVisible
      ) {
        setIsModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalVisible]);

  // Initialize search query from URL on component mount
  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);

    // Update the hidden input in the exams page
    const globalSearchInput = document.getElementById(
      "global-search-input"
    ) as HTMLInputElement;
    if (globalSearchInput) {
      globalSearchInput.value = query;
      globalSearchInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }, [searchParams]);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Update URL with search query
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    // Update the URL with the search parameter
    router.replace(`${pathname}?${params.toString()}`);

    // Update the hidden input in the exams page to trigger filtering
    const globalSearchInput = document.getElementById(
      "global-search-input"
    ) as HTMLInputElement;
    if (globalSearchInput) {
      globalSearchInput.value = query;
      globalSearchInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full py-9 bg-white dark:bg-black">
      <div className="flex items-center w-full justify-between">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image
            src="/images/exam-logo.png"
            alt="SkillNet Logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden lg:flex md:g">
          <Link
            href="/dashboard/exam-page"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary border-r-[3px] border-r-[#1D1D1C] pr-3",
              isActive("") ? "" : "text-gray-600"
            )}
          >
            Exams
          </Link>
          <Link
            href="/dashboard/exam-page/registered"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary border-r-[3px] border-r-[#1D1D1C] px-3",
              isActive("registered") ? "" : "text-zinc-600"
            )}
          >
            Registered
          </Link>
          <Link
            href="/dashboard/exam-page/results"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary pl-3",
              isActive("results") ? "" : "text-zinc-600"
            )}
          >
            Results
          </Link>
        </div>
        <div className="flex items-center gap-0.5 md:gap-4">
          {/* Custom Button for Notifications */}
          <div className="flex items-center gap-1">
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
              <div className="relative flex items-center">
                <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                {/* Custom Input for Search */}
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full rounded-lg border border-[#1F1F1F] placeholder:italic border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>
          </div>

          {address ? (
            <div className="flex items-center gap-2 rounded-lg w-40 bg-white dark:bg-[bg-gray-200 dark:bg-gray-800] px-2.5 py-2">
              <div className="relative h-6 w-6 overflow-hidden rounded-full">
                <Image
                  src="/images/exam-navbar-avatar.png"
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-medium">
                {truncateAddress(address)}
              </span>
              <div className="relative flex items-center" ref={dropdownRef}>
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute -right-2 top-6 z-10 mt-4 w-56 origin-top-right rounded-md border border-zinc-700 bg-white dark:bg-[bg-gray-200 dark:bg-gray-800] p-1 text-popover-foreground shadow-md focus:outline-none">
                    <button
                      className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      onClick={() => {
                        console.log("Profile clicked");
                        setDropdownOpen(false);
                      }}
                    >
                      Profile
                    </button>
                    <button
                      className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      onClick={() => {
                        console.log("Settings clicked");
                        setDropdownOpen(false);
                      }}
                    >
                      Settings
                    </button>
                    <button
                      className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      onClick={() => {
                        disconnect();
                        disconnectWallet();
                        console.log("Disconnect clicked");
                        setDropdownOpen(false);
                      }}
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsModalVisible(true)}
                disabled={isConnecting}
                className={`flex items-center w-40 justify-center gap-2 rounded-lg border border-zinc-700 hover:border-zinc-600 px-4 py-2.5 text-xs font-medium transition-colors ${
                  isConnecting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </button>
              {isModalVisible && (
                <div className="absolute right-0 mt-2 z-10" ref={modalRef}>
                  <WalletSelectorUI onClose={() => setIsModalVisible(false)} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <nav className="lg:hidden">
        <div className="flex justify-between px-4 pb-2">
          <Link
            href="/dashboard/exam-page"
            className={cn(
              "flex flex-1 items-center justify-center py-2 text-sm font-medium",
              isActive("")
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            )}
          >
            Exams
          </Link>
          <Link
            href="/dashboard/exam-page/registered"
            className={cn(
              "flex flex-1 items-center justify-center py-2 text-sm font-medium",
              isActive("registered")
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            )}
          >
            Registered
          </Link>
          <Link
            href="/dashboard/exam-page/results"
            className={cn(
              "flex flex-1 items-center justify-center py-2 text-sm font-medium",
              isActive("results")
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            )}
          >
            Results
          </Link>
        </div>
      </nav>
      {/* Mobile search bar */}
      <div className="md:hidden px-4 pt-2">
        <div className="relative flex items-center">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full rounded-lg border border-[#1F1F1F] placeholder:italic border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
    </header>
  );
}
