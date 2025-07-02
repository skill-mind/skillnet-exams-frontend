


"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

// --- Types ---
type AccountType = "user" | "institution";

interface AccountTypeOption {
  id: AccountType;
  title: string;
  description: string[];
  dashboardRoute: string;
}

interface AccountTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType: AccountType | null;
  onSelectType: (type: AccountType) => void;
  onSubmit: () => void;
}

const accountTypeOptions: AccountTypeOption[] = [
  {
    id: "user",
    title: "Student",
    description: [
      "Take exams with AI-powered proctoring to ensure fairness and integrity.",
      "Receive NFT-based certificates immediately after successful exam completion.",
      "Build a personal academic portfolio where certificates are stored securely and can be shared easily with third parties.",
      "Enjoy lifetime access to tamper-proof, verifiable academic credentials.",
      "Share your NFT certificates with employers and institutions directly from your dashboard.",
    ],
    dashboardRoute: "/dashboard/user",
  },
  {
    id: "institution",
    title: "Institution",
    description: [
      "Customize the design of certificates and mint them as NFTs for students, branded with your institution’s identity.",
      "Provide employers and other institutions a portal to instantly verify students' credentials without paperwork.",
      "Manage students, exams, results, certificates, and verifications from an easy-to-use dashboard.",
      "SkillNet ensures compliance with data protection standards, safeguarding student records.",
      "Get insights into exam participation, pass rates, verification requests, and overall student performance.",
    ],
    dashboardRoute: "/dashboard/institution",
  },
];

// --- Animation Variants ---
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
  },
};

export function AccountTypeModal({
  isOpen,
  onClose,
  selectedType,
  onSelectType,
  onSubmit,
}: AccountTypeModalProps) {
  const router = useRouter();

  const handleSelect = (type: AccountType, route: string) => {
    localStorage.setItem("userAccountType", type);
    onSelectType(type);
    router.push(route);
  };

  const handleSubmit = () => {
    if (selectedType) {
      onSubmit();
      const selectedOption = accountTypeOptions.find(
        (option) => option.id === selectedType
      );
      if (selectedOption) {
        localStorage.setItem("userAccountType", selectedType);
        window.location.href = selectedOption.dashboardRoute;
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <motion.div
        className="bg-[#0C1327] rounded-lg max-w-4xl w-full mx-4 p-6 md:p-10 shadow-lg overflow-y-auto max-h-[90vh]"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
        >
          <motion.h1
            className="font-bold text-2xl uppercase text-white mb-4"
            variants={headerVariants}
          >
            How do you want to use SkillNet?
          </motion.h1>
          <motion.p
            className="text-base text-gray-300"
            variants={headerVariants}
          >
            Choose between creating a user profile or an institution profile.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {accountTypeOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className="border border-[#343B4F] rounded-xl p-6 md:p-8 bg-[#081028] cursor-pointer hover:shadow-xl transition-shadow"
              variants={cardVariants}
              onClick={() => handleSelect(option.id, option.dashboardRoute)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2 className="text-xl font-semibold text-white mb-4">
                {option.title}
              </motion.h2>
              <motion.ul
                className="list-disc pl-6 mb-6 space-y-2"
                variants={listVariants}
              >
                {option.description.map((item, i) => (
                  <motion.li
                    key={`desc-${index}-${i}`}
                    className="text-sm text-gray-300 leading-relaxed"
                    variants={listItemVariants}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={buttonVariants}>
                <div className="inline-block border border-[#1FACAA] text-[#1FACAA] hover:bg-[#1FACAA] hover:text-[#081028] transition-colors duration-200 rounded-full px-6 py-2 text-sm font-medium">
                  Proceed to dashboard
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
