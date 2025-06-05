"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import CertificateCard from "./certificate-card";
import type { Certificate } from "@/data/certificate-data";
// import html2canvas from "html2canvas"; // You'll need to install this: npm install html2canvas
import { useRef } from "react";
import certificateImage from "../../../../public/images/certificate.png";

// Define interface for the candidate data passed from the table
interface CandidateData {
  examTitle?: string;
  score?: string;
  date?: string;
  candidateName?: string;
  [key: string]: any; // Allow additional properties
}

interface CertificateModalProps {
  certificate?: Certificate;
  candidateData?: CandidateData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  candidateData,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

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

  // METHOD 1: Download the certificate as an image by capturing the CertificateCard component
  // const handleDownloadAsImage = async () => {
  //   if (certificateRef.current) {
  //     try {
  //       const canvas = await html2canvas(certificateRef.current, {
  //         backgroundColor: "#0B1739",
  //         scale: 2, // Higher quality
  //         useCORS: true, // For external images
  //       });

  //       const link = document.createElement("a");
  //       link.download = `${certificateData.recipient}_${certificateData.title}_Certificate.png`;
  //       link.href = canvas.toDataURL("image/png");
  //       link.click();
  //     } catch (error) {
  //       console.error("Error generating certificate image:", error);
  //       alert("Error downloading certificate. Please try again.");
  //     }
  //   }
  // };

  // METHOD 2: Download a pre-existing certificate image from your server/assets
  const handleDownloadExistingImage = async () => {
    try {
      // Option 2a: From your public folder
      const imageUrl = certificateImage.src;

      // Option 2b: From your assets folder (you'd need to import it)
      // const imageUrl = certificateImage.src;

      // Option 2c: From an API endpoint that generates the certificate
      // const imageUrl = `/api/certificates/generate/${certificateData.id}`;

      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${certificateData.recipient}_${certificateData.title}_Certificate.png`;
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Certificate image not found or error downloading.");
    }
  };

  // METHOD 3: Generate and download PDF using jsPDF
  // const handleDownloadAsPDF = async () => {
  //   // You'll need to install jsPDF: npm install jspdf html2canvas
  //   const { jsPDF } = await import("jspdf");

  //   if (certificateRef.current) {
  //     try {
  //       const canvas = await html2canvas(certificateRef.current, {
  //         backgroundColor: "#0B1739",
  //         scale: 2,
  //         useCORS: true,
  //       });

  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF({
  //         orientation: "landscape",
  //         unit: "mm",
  //         format: "a4",
  //       });

  //       const imgWidth = 297; // A4 landscape width in mm
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //       pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  //       pdf.save(
  //         `${certificateData.recipient}_${certificateData.title}_Certificate.pdf`
  //       );
  //     } catch (error) {
  //       console.error("Error generating PDF:", error);
  //       alert("Error downloading certificate PDF. Please try again.");
  //     }
  //   }
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center font-ubuntu justify-center p-4 z-50 no-scrollbar"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#00031B] rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-auto no-scrollbar"
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
                <p className="text-gray-400">
                  Pass Percentage: {certificateData.passPercentage}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items- p-5 bg-[#0B1739]">
            <div ref={certificateRef}>
              <CertificateCard certificate={certificateData} />
            </div>
            <div className="flex justify-start items-start gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadExistingImage}
                className="mt-4 px-6 py-2 bg-transparent border border-[#545A64] text-xs rounded-full w-fit items-start hover:bg-green-700 transition-colors"
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
