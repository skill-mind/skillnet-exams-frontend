"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function HelpCenter() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const helpAndTips = [
    {
      id: 1,
      title: "Getting started as a user on SkillNet",
      description: [
        "Whether you're a student, educator, or institution, your first steps on SkillNet set the tone for a smooth experience. Complete your profile to receive and store your NFT certificates. Make sure to verify your email address after signing up—this activates your account and gives you full access to SkillNet's features.",
      ],
    },
    {
      id: 2,
      title: "Getting started as institution on SkillNet",
      description: [
        "Onboard your institution in just a few simple steps and unlock a future of secure, verifiable academic credentialing.",
        "Connect your wallet and complete your institution profile with essential details like your institution name, logo, and information.",
        "Easily create exams on SkillNet or upload existing results and certificates for blockchain-backed storage and verification.",
        "Design your certificates with your institution's branding and mint them as NFTs, giving your students verifiable lifelong credentials.",
        "Use your institution dashboard to monitor student performance, manage records, view verification requests, and gain actionable insights.",
      ],
    },
    {
      id: 3,
      title: "Exam Creation Guide (How to structure, host, and monitor)",
      description: [
        "Easily create exams by setting up your exam details, building a question bank, and organizing sections. Host your exams securely with AI proctoring, randomized questions, and time restrictions. Monitor in real-time with live dashboards and automated integrity reports to ensure exam fairness.",
      ],
    },
    {
      id: 4,
      title:
        "Technical Issues (Troubleshooting exam uploads, media files, etc.)",
      description: [
        "Having trouble uploading exams or media files? SkillNet provides real-time error alerts, easy retry options, and step-by-step troubleshooting guides to quickly resolve common issues. Need more help? Our support team is always ready to assist.",
      ],
    },
    {
      id: 5,
      title: "Certification benefits and use cases",
      description: [
        "SkillNet’s blockchain-backed certificates are secure, tamper-proof, and instantly verifiable. Students can use them for job applications, further studies, and professional licensing, while institutions boost credibility and streamline verification for third parties.",
      ],
    },
  ];

  const handleToggle = (id: number): void => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen rounded-[12px] p-[20px] flex flex-col gap-[60px] bg-[#081028]">
      <div className="w-full border border-[#343B4F] rounded-[12px] p-[20px] flex flex-col gap-[20px] bg-[#0B1739]">
        <h1 className="text-[24px] font-[500] text-[#FCFCFC]">
          New To SkillNet
        </h1>
        <p className="text-[14px] font-[500] text-[#D9D9D9] w-full max-w-[639px]">
          SkillNet is not just an exam platform—it’s a game-changer. Designed to
          deliver secure, transparent, and verifiable academic records, SkillNet
          leverages cutting-edge blockchain technology, AI proctoring, and
          NFT-based certificate minting
        </p>
        <div className="flex justify-start">
          <button
            type="button"
            className="rounded-[48px] bg-transparent py-[12px] px-[24px] border mt-4 border-[#1FACAA] text-[#FAFCFF]">
            Explore SkillNet
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <h2 className="text-[15px] text-[#8A8A8A] font-[500]">Help And Tips</h2>
        <div className="flex flex-col gap-[16px]">
          {helpAndTips.map((item) => (
            <div
              key={item.id}
              className="w-full py-[12px] px-[24px] border-b border-[#2D2E2D] flex flex-col gap-[20px]">
              <div className="flex justify-between items-center">
                <h1 className="text-[14px] font-[500] text-[#CCCCCC]">
                  {item.title}
                </h1>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className="rounded-[48px] bg-transparent py-[6px] px-[12px] border font-[400] text-[12px] border-[#2D2E2D] text-[#FFFFFF]">
                  {activeId === item.id ? "Collapse" : "Expand"}
                </button>
              </div>

              <AnimatePresence initial={false}>
                {activeId === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-[14px] font-[500] text-[#D9D9D9]">
                    {item.description.map((desc, index) => (
                      <p key={index} className="mb-2">
                        {desc}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
