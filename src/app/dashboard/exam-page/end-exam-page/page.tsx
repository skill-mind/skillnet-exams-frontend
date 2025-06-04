"use client";

import React from "react";
import CertificateModal from "@/components/dashboard/user/certificate-modal";
import { useState } from "react";

const EndExamPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const candidateData = {
    examTitle: "Dummy Exam Title",
    score: "85%",
    date: "June 4, 2025",
    candidateName: "John Doe",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F1EFEF]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b  border-[#C3C3C3]">
        <div>
          <h1 className="text-sm font-semibold text-[#060812]">
            Institutions Name
          </h1>
          <p className="text-sm text-[#595959]">Solidity Basic Exam</p>
        </div>
        <button className="px-6 py-2 border rounded-full text-sm hover:bg-gray-100">
          Close
        </button>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h2 className="text-lg text-[#000000] font-semibold mb-4">
          Thank You For Taking The Solidity Basic Certification Exam
        </h2>
        <p className="text-lg font-medium text-[#595959]">Your score</p>
        <p className="text-lg text-black font-bold mb-6">70/100</p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 border border-[#545A64] rounded-full text-[#060812] text-sm font-medium hover:bg-gray-100"
        >
          View Certificate
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t text-base font-semibold text-[#060812] bg-[#D3D3D3]">
        Powered By SkillNet
      </footer>
      {/* 4) Conditionally render the modal based on state */}
      <CertificateModal
        candidateData={candidateData}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default EndExamPage;
