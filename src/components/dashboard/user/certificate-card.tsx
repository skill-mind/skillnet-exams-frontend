"use client";

import { motion } from "framer-motion";
import type { Certificate } from "@/data/certificate-data";

interface CertificateCardProps {
  certificate: Certificate;
  showVerifyButton?: boolean;
}

export default function CertificateCard({
  certificate,
  showVerifyButton = false,
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden w-full max-w-[360px] p-2.5 border border-[#1C1D1C]"
    >
      <div className="border rounded-xl p-5 border-[#545A64]">
        <div className="flex justify-between text-xs text-[#8A8A8A] font-semibold mb-1">
          <div>Date: {certificate.date}</div>
          <div>ID: {certificate.id}</div>
        </div>
        <div className="flex justify-center my-4">
          <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
        </div>
        <div className="text-center space-y-4">
          <div className="text-sm text-[#8A8A8A]">
            SkillNet Professional Certification
          </div>
          <h3 className="text-xl font-bold">{certificate.title}</h3>
          <div>
            <div className="text-sm text-gray-400 mb-2">Issued To</div>
            <div className="font-semibold text-lg">{certificate.recipient}</div>
          </div>
          <div className="text-xs text-gray-400 px-4">
            {certificate.description}
          </div>
          <div className="flex justify-center pt-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>


    </motion.div>
  );
}
