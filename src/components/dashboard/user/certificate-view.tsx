"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certificate, certificates } from "@/data/certificate-data";
import CertificateModal from "./certificate-modal";
import VerificationSection from "./verification-section";
import { Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CertificateView() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Set loaded state after a small delay to ensure DOM is ready
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {showVerification ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] }}
            className="w-full"
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Verify Certificate</h2>
            </div>
            <VerificationSection />
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            exit={{ opacity: 0 }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#071630] p-3 rounded-lg">
                <Image src="/svg/certificate-01.svg" width={44} height={44} alt="" />
              </div>
              <div>
                <div className="text-2xl font-bold">{certificates.length}</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
            </div>

            <motion.div className="mb-12" variants={sectionVariants}>
              <motion.h2
                className="text-xl font-semibold mb-4"
                variants={headerVariants}
              >
                Verify Certificate
              </motion.h2>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors"
              >
                <Link
                  href={"/dashboard/user/view-certificate/verify-certificate"}
                >
                  Verify
                </Link>
              </motion.button>
            </motion.div>

            <motion.div variants={sectionVariants}>
              <motion.h2
                className="text-xl font-semibold mb-6"
                variants={headerVariants}
              >
                Your Certificates
              </motion.h2>
              <motion.div className="space-y-4" variants={listVariants}>
                {certificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    variants={listItemVariants}
                    whileHover={{
                      scale: 1.01,
                      backgroundColor: "rgba(7, 22, 48, 0.9)",
                    }}
                    className="bg-[#071630] rounded-lg p-4 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 bg-gray-200 rounded-md"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      ></motion.div>
                      <div>
                        <h3 className="font-medium">{certificate.title}</h3>
                        <p className="text-sm text-gray-400">
                          {certificate.institution}
                        </p>
                        <p className="text-sm text-gray-400">
                          Pass Percentage: {certificate.passPercentage}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleOpenModal(certificate)}
                      className="px-4 py-1 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {isModalOpen && selectedCertificate && (
                <CertificateModal
                  certificate={selectedCertificate}
                  onClose={handleCloseModal}
                  isOpen={isModalOpen} // Added this required prop
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}