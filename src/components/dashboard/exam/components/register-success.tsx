"use client";

import { ArrowLeft, Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomModal } from "./ui/custom-modal";

interface RegisterSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  examPrice?: string;
  uniqueCode?: string;
  onProceed?: () => void;
}

export default function RegisterSuccessModal({
  open,
  onOpenChange,
  examPrice = "$24.00 USD",
  uniqueCode = "CC4g1ffsytopiqA",
  onProceed,
}: RegisterSuccessModalProps) {
  const [mounted, setMounted] = useState(false);

  // Handle client-side rendering for the portal
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CustomModal
      open={open}
      onClose={() => onOpenChange(false)}
      className="bg-white dark:bg-[bg-gray-200 dark:bg-gray-800] text-black dark:text-white border border-[#40403E] p-6 space-y-6"
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

      <div className="flex justify-center">
        <div className="rounded-md bg-transparent py-1 px-5 text-[#d9f99d] border border-[#3B3B3A]">
          Paid
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9f99d]/20">
          <Check className="h-8 w-8 text-[#d9f99d]" />
        </div>

        <h3 className="text-xl font-semibold">Registration Successful</h3>

        <div className="text-center text-sm text-zinc-400">
          HERE IS YOUR UNIQUE CODE:{" "}
          <span className="font-medium text-black dark:text-white">
            {uniqueCode}
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          onProceed?.();
          onOpenChange(false);
        }}
        className="w-full rounded-md bg-[#d9f99d] px-4 py-2 font-medium text-black transition-colors hover:bg-[#bef264] focus:outline-none focus:ring-2 focus:ring-[#d9f99d] focus:ring-offset-2"
      >
        PROCEED
      </button>
    </CustomModal>
  );
}
