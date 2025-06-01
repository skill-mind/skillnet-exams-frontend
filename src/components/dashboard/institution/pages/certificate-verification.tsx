"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateVerification() {
  const [inputId, setInputId] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  const [showError, setShowError] = useState(false);

  const certificate = {
    id: 1,
    owner: "Law Less",
    course: "Web Development",
    image: "/images/head.png",
    date: "April 15, 2025",
    issuedTo: "John Doe",
    verificationId: "123456",
  };

  const handleVerify = () => {
    if (inputId.trim() === certificate.verificationId) {
      setIsVerified(true);
      setShowError(false);
    } else {
      setIsVerified(false);
      setShowError(true);
    }
  };

  return (
    <div className="w-full min-h-screen rounded-[12px] p-[20px] flex flex-col gap-[60px] bg-[#081028]">
      {/* Input Section */}
      <div className="flex flex-col gap-[16px]">
        <label
          htmlFor="verificationNumber"
          className="text-[#9596A0] text-[14px] font-[500]"
        >
          Please input verification ID to proceed
        </label>
        <input
          type="text"
          id="verificationNumber"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="bg-transparent py-[8px] px-[12px] outline-none border rounded-[12px] border-[#545A64] placeholder:text-[#8A8A8A] w-full"
          placeholder="Enter Verification number"
        />
        <div className="flex justify-start">
          <button
            type="button"
            onClick={handleVerify}
            className="rounded-[48px] bg-transparent py-[12px] px-[24px] border mt-4 border-[#545A64] text-[#FAFCFF] hover:bg-[#1FACAA] transition-colors"
          >
            Verify Details
          </button>
        </div>
        {showError && (
          <motion.p
            className="text-red-500 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Invalid Verification ID. Please try again.
          </motion.p>
        )}
      </div>

      {/* Certificate Display Section */}
      <div className="w-full flex-col flex items-center h-full lg:min-h-[543px] border border-[#343B4F] justify-center rounded-[12px] bg-[#0B1739] p-[34px]">
        <AnimatePresence>
          {isVerified ? (
            <motion.div
              key="certificate"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center"
            >
              <button
                type="button"
                className="px-6 py-2 rounded-full text-white font-semibold bg-[#5AE670] flex items-center gap-2 mb-6 shadow-[0px_0px_0px_8px_#418150,0px_0px_0px_16px_#385442]"
              >
                <Image
                  src={"/verifiedBadge.svg"}
                  alt="badge"
                  height={25}
                  width={25}
                />
                Verified! Please Proceed
              </button>

              <div className="max-w-[371px] w-full h-full min-h-[453px] rounded-[22px] p-[10px] bg-[#0C0C0C]">
                <div className="w-full h-full text-[#8A8A8A] text-[12px] font-[600] items-center rounded-[12px] border border-[#545A64] p-[20px] flex flex-col gap-[20px]">
                  <div className="flex justify-between w-full">
                    <span>Date: {certificate.date}</span>
                    <span>ID: {certificate.verificationId}</span>
                  </div>
                  <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-[12px] overflow-hidden">
                    <Image
                      src={certificate.image}
                      alt={certificate.owner}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p>SkillNet Professional Certification</p>
                  <h1 className="text-[24px] font-[600] text-[#FCFCFC]">
                    {certificate.course}
                  </h1>
                  <p>Issued to</p>
                  <h1 className="text-[18px] font-[600] text-[#FCFCFC]">
                    {certificate.owner}
                  </h1>
                  <p className="text-center">
                    An online non-credit course authorized by Institution name
                    and offered through SkillNet
                  </p>
                  <div className="w-[30px] h-[30px] bg-[#D9D9D9] rounded-[12px] flex items-center justify-center"></div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col space-y-4 items-center justify-center"
            >
              <div className="w-[70px] h-[44px] rounded-[12px] bg-[#D9D9D9]"></div>
              <p className="text-[#8A8A8A] text-[12px] font-[500]">
                Enter Verification ID to display data
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
