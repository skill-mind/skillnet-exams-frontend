"use client";

import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomModal } from "./ui/custom-modal";

interface RegisterErrorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  examPrice?: string;
  errorMessage?: string;
}

export default function RegisterErrorModal({
  open,
  onOpenChange,
  examPrice = "$24.00 USD",
  errorMessage = "PAYMENT AMOUNT NOT MET",
}: RegisterErrorModalProps) {
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
      <div className="flex justify-center">
        <div className="rounded-md bg-transparent py-1 px-5 text-[#C78989] border border-[#3B3B3A]">
          Unpaid
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
          <X className="h-8 w-8 text-zinc-400" />
        </div>

        <h3 className="text-xl font-semibold">Registration Failed</h3>

        <div className="text-center text-sm text-zinc-400">{errorMessage}</div>
      </div>

      <button
        onClick={() => onOpenChange(false)}
        className="w-full rounded-md bg-[#d9f99d] px-4 py-2 font-medium text-black transition-colors hover:bg-[#bef264] focus:outline-none focus:ring-2 focus:ring-[#d9f99d] focus:ring-offset-2"
      >
        CLOSE
      </button>
    </CustomModal>
  );
}
