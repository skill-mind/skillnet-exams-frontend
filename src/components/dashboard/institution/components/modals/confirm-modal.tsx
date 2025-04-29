"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmModal({
  isOpen = false,
  onClose,
  onConfirm,
}: ConfirmModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
      <div className="bg-[#00031B] text-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <div className="flex justify-center items-center relative mb-2 gap-4">
          <h2 className="text-xl font-medium text-center">Publish Exam</h2>
          <button onClick={onClose} className=" text-white hover:opacity-75">
            <img src="/close.svg" alt="Close" className=" w-3 h-3" />
          </button>
        </div>

        <div className="flex justify-center">
          <p className="text-white/80 text-center mb-6 w-[80%]">
            Confirm details! Once published, changes cannot be made.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 rounded-full border-white/20 text-white hover:bg-white/10"
          >
            Close
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 rounded-full bg-white text-[#0a0a29] hover:bg-white/90"
          >
            Confirm Publication
          </Button>
        </div>
      </div>
    </div>
  );
}
