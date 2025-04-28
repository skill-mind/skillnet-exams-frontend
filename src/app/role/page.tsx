"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import { motion, Variants } from "framer-motion"; // Import motion and Variants

const userProfileFeatures = [
  "Take exams with AI-powered proctoring to ensure fairness and integrity.",
  "Receive NFT-based certificates immediately after successful exam completion.",
  "Build a personal academic portfolio where certificates are stored securely and can be shared easily with third parties.",
  "Enjoy lifetime access to tamper-proof, verifiable academic credentials.",
  "Share your NFT certificates with employers and institutions directly from your dashboard.",
];

const institutionProfileFeatures = [
  "Customize the design of certificates and mint them as NFTs for students, branded with your institution’s identity.",
  "Provide employers and other institutions a portal to instantly verify students' credentials without paperwork.",
  "Manage students, exams, results, certificates, and verifications from an easy-to-use dashboard.",
  "SkillNet ensures compliance with data protection standards, safeguarding student records.",
  "Get insights into exam participation, pass rates, verification requests, and overall student performance.",
];

// --- Animation Variants ---

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children: header, card1, card2
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.15, // Stagger h1 and p
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const listVariants: Variants = {
  hidden: {}, // Can be empty if parent handles initial state
  visible: {
    transition: {
      staggerChildren: 0.08, // Stagger list items
      delayChildren: 0.2, // Delay start after card appears
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5, // Delay after list items finish
      ease: "easeOut",
    },
  },
};

export default function page() {
  return (
    <main className="">
      <Navbar />
      {/* Wrap main content area for coordinated animation */}
      <motion.div
        className="container mx-auto pt-24 md:pt-36" // Adjusted padding top
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          className="header max-w-[800px] mx-auto mb-12 px-4 md:px-0" // Added padding for mobile
          variants={headerVariants} // Apply header animation variant
        >
          <motion.h1
            className="font-bold text-2xl md:text-3xl uppercase text-center mb-6 md:mb-8 text-white"
            variants={headerVariants} // Inherit stagger from parent
          >
            How do you want to use SkillNet?
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-center text-gray-300" // Adjusted text color/size
            variants={headerVariants} // Inherit stagger from parent
          >
            Choose between creating a user profile, designed for individuals, or
            an institution profile, tailored to represent an organization.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <div className="pb-32 md:pb-44 px-4 md:px-0">
          {" "}
          {/* Added padding */}
          {/* User Profile Card */}
          <motion.div
            className="card max-w-[800px] p-6 md:p-9 border border-[#343B4F] mx-auto rounded-[12px] bg-[#081028]"
            variants={cardVariants} 
          >
            <motion.h2 className="text-lg md:text-xl mb-[20px] font-medium text-white">
              User Profile
            </motion.h2>
            <motion.ul
              className="pl-5 md:pl-7 mb-[42px]" 
              variants={listVariants} 
            >
              {userProfileFeatures.map((feature, index) => (
                <motion.li
                  key={`user-${index}`} 
                  className="leading-8 md:leading-9 list-disc text-sm md:text-base font-light text-gray-300" 
                  variants={listItemVariants} 
                >
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            {/* Wrap Link for animation and hover effects */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block" // Needed for transforms
            >
              <Link
                href="/" 
                className="border border-[#1FACAA] text-[#1FACAA] hover:bg-[#1FACAA] hover:text-[#081028] transition-colors duration-200 rounded-full px-[24px] py-[12px] text-sm md:text-base font-medium"
              >
                Proceed to dashboard
              </Link>
            </motion.div>
          </motion.div>
          {/* Institution Profile Card */}
          <motion.div
            className="card max-w-[800px] p-6 md:p-9 border border-[#343B4F] mx-auto rounded-[12px] mt-16 md:mt-28 bg-[#081028]" // Adjusted margin top
            variants={cardVariants} 
          >
            <motion.h2 className="text-lg md:text-xl mb-[20px] font-medium text-white">
              Institution Profile
            </motion.h2>
            <motion.ul
              className="pl-5 md:pl-7 mb-[42px]" // Adjusted padding left
              variants={listVariants} // Use list variants for staggering children
            >
              {institutionProfileFeatures.map((feature, index) => (
                <motion.li
                  key={`inst-${index}`} // More specific key
                  className="leading-8 md:leading-9 list-disc text-sm md:text-base font-light text-gray-300" // Adjusted text style
                  variants={listItemVariants} // Animate each list item
                >
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            {/* Wrap Link for animation and hover effects */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block" // Needed for transforms
            >
              <Link
                href="/" // Update this link to the actual institution dashboard path
                className="border border-[#1FACAA] text-[#1FACAA] hover:bg-[#1FACAA] hover:text-[#081028] transition-colors duration-200 rounded-full px-[24px] py-[12px] text-sm md:text-base font-medium"
              >
                Proceed to dashboard
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </main>
  );
}
