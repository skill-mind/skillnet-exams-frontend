"use client";

import Table from "@/components/dashboard/table";
import VerifyCertification from "@/components/verifyCertification";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CertificatesPage() {
  const [activeTab, setActiveTab] = useState("issuedCertificate");

  const certificateIssued = [
    {
      "S/N": 1,
      Email: "example@gmail.com",
      Date: "12th Dec, 2025",
      Certification: "N/A",
      Status: "Unverified",
    },
    {
      "S/N": 2,
      Email: "example@gmail.com",
      Date: "12th Dec, 2025",
      Certification: "N/A",
      Status: "Eligible",
    },
    {
      "S/N": 3,
      Email: "example@gmail.com",
      Date: "12th Dec, 2025",
      Certification: "N/A",
      Status: "Unverified",
    },
    {
      "S/N": 4,
      Email: "example@gmail.com",
      Date: "12th Dec, 2025",
      Certification: "N/A",
      Status: "Eligible",
    },
  ];

  return (
    <section className="w-full h-full flex flex-col mb-20">
      {/* Title and Description */}
      <div className="flex flex-col h-full w-full">
        <h1 className="text-2xl font-bold mb-6">Certificates Management</h1>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <p className="text-gray-400">
            Manage certificates, issue new ones, and track distribution.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full flex gap-[16px] mt-4">
        <button
          onClick={() => setActiveTab("issuedCertificate")}
          type="button"
          className={`font-[500] text-[14px] px-[24px] py-[12px] rounded-[8px] 
            ${
              activeTab === "issuedCertificate"
                ? "bg-[#161716] border-none"
                : "bg-transparent border border-[#161716]"
            }`}>
          Issued Certificates
        </button>
        <button
          onClick={() => setActiveTab("verifiedCertificate")}
          type="button"
          className={`font-[500] text-[14px] px-[24px] py-[12px] rounded-[8px] 
            ${
              activeTab === "verifiedCertificate"
                ? "bg-[#161716] border-none"
                : "bg-transparent border border-[#161716]"
            }`}>
          Verified Certificates
        </button>
      </div>

      {/* Table */}
      <motion.div
        key={activeTab}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        {activeTab === "verifiedCertificate" && <VerifyCertification />}
        {activeTab === "issuedCertificate" && (
          <Table certificates={certificateIssued} />
        )}
      </motion.div>
    </section>
  );
}
