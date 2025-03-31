"use client";

import type React from "react";

import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomModal } from "./ui/custom-modal";

interface RegisterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: {
    fullName: string;
    email: string;
    walletAddress: string;
  }) => void;
  examPrice?: string;
}

export default function RegisterModal({
  open,
  onOpenChange,
  onSubmit,
  examPrice = "$24.00 USD",
}: RegisterModalProps) {
  const [mounted, setMounted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  // Handle client-side rendering for the portal
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fullName, email, walletAddress });
  };

  if (!mounted) return null;

  return (
    <CustomModal
      open={open}
      onClose={() => onOpenChange(false)}
      className="bg-white dark:bg-gray-900 text-black dark:text-white border border-[#40403E] p-6 space-y-6"
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-black dark:text-white hover:bg-zinc-800"
            onClick={() => onOpenChange(false)}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </button>
          <h2 className="text-xl font-semibold">Registration</h2>
        </div>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-black dark:text-white hover:bg-zinc-800"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <div className="h-0.5 bg-[#1D1D1C]" />
      <div className="flex flex-col items-center justify-center ">
        <div className="rounded-md bg-[#252625] px-4 py-2">
          <span className="text-xl font-bold">{examPrice}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 ">
        <div className="space-y-0.5">
          <label htmlFor="fullName" className="flex text-sm text-[#BBBBBB]">
            Full Name <span className="ml-1 text-red-500">*</span>
          </label>
          <input
            id="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <div className="space-y-0.5">
          <label htmlFor="email" className="flex text-sm text-[#BBBBBB]">
            Email Address <span className="ml-1 text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <div className="space-y-0.5">
          <label
            htmlFor="walletAddress"
            className="flex text-sm text-[#BBBBBB]"
          >
            Wallet Address <span className="ml-1 text-red-500">*</span>
          </label>
          <input
            id="walletAddress"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
            className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#d9f99d] px-4 py-2 font-medium text-black transition-colors hover:bg-[#bef264] focus:outline-none focus:ring-2 focus:ring-[#d9f99d] focus:ring-offset-2"
        >
          PROCEED
        </button>
      </form>
    </CustomModal>
  );
}
