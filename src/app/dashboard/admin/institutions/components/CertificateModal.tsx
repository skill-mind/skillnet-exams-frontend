"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = {
  exam: {
    title: string;
    candidates: number;
    date: string;
    certification: string;
    status: string;
  };
  onClose: () => void;
};

export default function CertificateModal({ exam, onClose }: Props) {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === "certificate-modal-bg") onClose();
  };

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  const certificateId = Math.floor(Math.random() * 1000000000);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      id="certificate-modal-bg"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4"
    >
      <div className="relative max-w-xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Certificate */}
        <div className="bg-[#00031b] p-6 rounded-2xl border-2 border-gray-900 shadow-2xl z-100">
          <div className="bg-[#0c0c0c] p-6 rounded-2xl shadow-2xl z-100">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 text-gray-400 text-sm">
              <div>Date: {currentDate}</div>
              <div>ID: {certificateId}</div>
            </div>

            {/* Logo/Icon Placeholder */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gray-300 rounded-xl flex items-center justify-center"></div>
            </div>

            {/* Certificate Title */}
            <div className="text-center mb-2">
              <p className="text-gray-400 text-base mb-2">
                SkillNet Professional Certification
              </p>
              <h2 className="text-white text-2xl font-bold mb-4">
                {exam.title}
              </h2>
            </div>

            {/* Issued To */}
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">Issued To</p>
              <h2 className="text-white text-2xl font-bold">Ebube</h2>
            </div>

            {/* Description */}
            <div className="text-center mb-8">
              <p className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto">
                An Online Non-Credit Course Authorized By Institution <br />{" "}
                Name And Offered Through SkillNet
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gray-300 rounded-xl flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
