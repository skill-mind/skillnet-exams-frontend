"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import CertificateCard from "./certificate-card";
import type { Certificate } from "@/data/certificate-data";

interface CertificateModalProps {
  certificate?: Certificate;  // Made optional
  candidateData?: any;        // Added candidateData prop
  isOpen: boolean;           // Added isOpen prop
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  candidateData,
  isOpen,
  onClose,
}: CertificateModalProps) {
  // Only render if modal is open
  if (!isOpen) return null;

  // Create a certificate object if we received candidateData instead of certificate
  const certificateData = certificate || {
    title: candidateData?.examTitle || "Unknown Exam",
    institution: "Test Institution", // Default value
    date: candidateData?.date || "Unknown Date",
    duration: "2 hours", // Default value
    passPercentage: candidateData?.score || "Unknown Score",
    id: "default-id", // Default value
    grade: "A", // Default value
    recipient: candidateData?.candidateName || "Unknown Candidate",
    description: "Certificate description", // Default value
    imageUrl: "/default-image-url.png", // Default value
  };

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF or image of the certificate
    alert("Certificate download functionality would be implemented here");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center font-ubuntu justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#00031B] rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="space-y-4">
            <div className="flex flex-col w-2/3 sm:text-nowrap text-sm xl:font-semibold gap-4">
              <div className="grid grid-cols-2">
                <p className="text-sm ">Exam</p>
                <p className="text-gray-400">{certificateData.title}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-sm ">Institution</p>
                <p className="text-gray-400">{certificateData.institution}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-sm ">Date</p>
                <p className="text-gray-400">{certificateData.date}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-sm ">Duration</p>
                <p className="text-gray-400">{certificateData.duration}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-sm ">Grade</p>
                <p className="text-gray-400">Pass Percentage: {certificateData.passPercentage}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items- p-5 bg-[#0B1739]">
            <CertificateCard certificate={certificateData} />
            <div className="flex justify-start items-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="mt-4 px-6 py-2 bg-transparent border border-[#545A64] text-xs rounded-full w-fit items-start hover:bg-blue-700 transition-colors"
              >
                Download
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}