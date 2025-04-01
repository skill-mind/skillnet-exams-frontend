"use client";

import type React from "react";
import { X } from "lucide-react";

interface ExamItem {
  name: string;
  status: string;
}

interface InstitutionModalProps {
  institution: {
    name: string;
    walletAddress: string;
    location: string;
    examsCreated: number;
    exams: ExamItem[];
    status: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const InstitutionModal: React.FC<InstitutionModalProps> = ({
  institution,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative  bg-gray-400 dark:bg-[#161716] border border-[#313130] rounded-lg w-full max-w-2xl mx-4 my-6 z-10 max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Institution
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Name */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#6E6E6E] w-full sm:w-32 mb-1 sm:mb-0">
                Name
              </span>
              <span className="hidden sm:block text-[#C04639] mx-2">–</span>
              <span className="text-white">{institution.name}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-[#313130]"></div>

            {/* Wallet Address */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#6E6E6E] w-full sm:w-32 mb-1 sm:mb-0">
                Wallet Address
              </span>
              <span className="hidden sm:block text-[#C04639] mx-2">–</span>
              <span className="text-white break-all">
                {institution.walletAddress}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-[#313130]"></div>

            {/* Location */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#6E6E6E] w-full sm:w-32 mb-1 sm:mb-0">
                Location
              </span>
              <span className="hidden sm:block text-[#C04639] mx-2">–</span>
              <span className="text-white">{institution.location}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-[#313130]"></div>

            {/* Exams Created */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-4">
                <span className="text-[#6E6E6E] w-full sm:w-32 mb-1 sm:mb-0">
                  Exams Created
                </span>
                <span className="hidden sm:block text-[#C04639] mx-2">–</span>
                <span className="text-white">{institution.examsCreated}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:ml-40">
                {institution.exams.map((exam, index) => (
                  <div key={index} className="bg-[#1B1B1B] rounded-md p-3">
                    <p className="text-sm text-white mb-1">{exam.name}</p>
                    <p
                      className={`text-xs ${
                        exam.status === "Completed"
                          ? "text-[#898783]"
                          : "text-[#898783]"
                      }`}
                    >
                      {exam.status === "Completed"
                        ? "Completed"
                        : "In progress"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#313130]"></div>

            {/* Status */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#6E6E6E] w-full sm:w-32 mb-1 sm:mb-0">
                Status
              </span>
              <span className="hidden sm:block text-[#C04639] mx-2">–</span>
              <span
                className={`${
                  institution.status === "Active"
                    ? "text-[#898783]"
                    : "text-yellow-400"
                }`}
              >
                {institution.status}
              </span>
            </div>
          </div>

          {/* Ban Institution Button */}
          <button className="w-full bg-[#1B1B1B] hover:bg-[#252525] text-white py-2 sm:py-3 rounded-md mt-6 sm:mt-8 uppercase font-medium">
            BAN USER
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstitutionModal;
