"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certificate, certificates } from "@/data/certificate-data";
import CertificateCard from "./certificate-card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function VerificationSection() {
  const [verificationId, setVerificationId] = useState("");
  const [verifiedCertificate, setVerifiedCertificate] =
    useState<Certificate | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const handleVerify = () => {
    if (!verificationId.trim()) return;

    setIsVerifying(true);

    // Simulate verification process
    setTimeout(() => {
      const certificate = certificates.find(
        (cert) => cert.id === verificationId
      );
      setVerifiedCertificate(certificate || null);
      setIsVerifying(false);
      setVerificationComplete(true);
    }, 1500);
  };

  // Animation variants - smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {" "}
      <Link
        href={"/dashboard/user/view-certificate"}
        className="flex gap-2 items-center w-full"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-gray-700  w-fit rounded-full text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <ChevronLeft />
          Back
        </motion.div>
      </Link>
      <motion.p className="text-sm text-[#9596A0]" variants={itemVariants}>
        Please input verification ID to proceed
      </motion.p>
      <motion.div className="space-y-4" variants={itemVariants}>
        <motion.input
          type="text"
          value={verificationId}
          onChange={(e) => setVerificationId(e.target.value)}
          placeholder="Enter Verification number"
          className="w-full px-4 py-3 bg-transparent text-white border border-[#545A64] rounded-xl focus:outline-none focus:border-blue-500 placeholder:text-[#8A8A8A] transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.99],
          }}
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleVerify}
          disabled={isVerifying}
          className="px-6 py-3 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.99],
          }}
        >
          Verify Details
        </motion.button>
      </motion.div>
      <motion.div className="mt-8" variants={itemVariants}>
        <motion.div
          className="bg-[#0B1739] rounded-lg p-6 min-h-[400px] flex items-center justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: [0.6, 0.05, 0.01, 0.99],
          }}
        >
          <AnimatePresence mode="wait">
            {isVerifying && (
              <motion.div
                key="verifying"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.99] }}
                className="flex justify-center items-center"
              >
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </motion.div>
            )}

            {verificationComplete && !isVerifying && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }}
                className="flex flex-col items-center"
              >
                {verifiedCertificate ? (
                  <>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.6, 0.05, 0.01, 0.99],
                        delay: 0.2,
                      }}
                      className="mb-8"
                    >
                      <button className="bg-[#5AE670] text-white font-semibold py-3 px-6 rounded-full shadow-[0_0_0_16px_#385442,0_0_0_8px_#418150] flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Verify
                      </button>
                    </motion.div>
                    <CertificateCard
                      certificate={verifiedCertificate}
                      showVerifyButton={true}
                    />
                  </>
                ) : (
                  <div className="text-center">
                    <div className="p-3 bg-red-500 rounded-full inline-flex mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      Certificate Not Found
                    </h3>
                    <p className="text-gray-400">
                      No certificate found with the provided ID. Please check
                      and try again.
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {!isVerifying && !verificationComplete && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }}
                className="text-center text-gray-400"
              >
                <motion.div
                  className="w-16 h-16 bg-gray-700 rounded-md mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <p>Enter Verification ID To Display Data</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
