"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CertificateModal from "./CertificateModal";

const exams = [
  {
    title: "Midterm Assessment",
    candidates: 45,
    date: "5th Jan, 2026",
    certification: "View",
    status: "In progress",
  },
  {
    title: "Final Evaluation",
    candidates: 30,
    date: "15th May, 2026",
    certification: "View",
    status: "Scheduled",
  },
  {
    title: "Practical Exam",
    candidates: 20,
    date: "20th Feb, 2026",
    certification: "View",
    status: "Not started",
  },
  {
    title: "Mock Test",
    candidates: 60,
    date: "10th Nov, 2025",
    certification: "View",
    status: "Finished",
  },
  {
    title: "Quiz series",
    candidates: 10,
    date: "1st Oct, 2025",
    certification: "View",
    status: "Finished",
  },
];

type Props = {
  institution: {
    name: string;
    email: string;
    exams: typeof exams;
  };
  onClose: () => void;
};

export default function InstitutionModal({ institution, onClose }: Props) {
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal-bg") onClose();
  };

  const handleViewCertificate = (exam: any) => {
    setSelectedExam(exam);
    setShowCertificateModal(true);
  };

  const closeCertificateModal = () => {
    setShowCertificateModal(false);
    setSelectedExam(null);
  };

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCertificateModal) {
          closeCertificateModal();
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, [showCertificateModal]);

  return (
    <>
      <div
        id="modal-bg"
        onClick={handleOutsideClick}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
      >
        <div className="bg-[#00031b] text-white border-2 border-gray-900 rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto relative">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl mb-4">User Profile</h2>

            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
              <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Institution and Email */}
                <div className="flex flex-col gap-4 md:flex-row md:gap-8 w-full">
                  <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-[#AEB9E1]">Institution:</p>
                    <p>Institution Name</p>
                  </div>

                  <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-[#AEB9E1]">Email:</p>
                    <p>{institution.email}</p>
                  </div>

                  <div className="flex">
                    <button
                      onClick={onClose}
                      className="flex justify-start items-center md:justify-end w-full md:w-auto whitespace-nowrap space-x-2 text-red-500 ">
                    
                      <Image
                        src="/computer-remove.svg"
                        alt="Deactivate Institution"
                        width={20}
                        height={20}
                      />
                      <span>Deactivate Institution</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-[700px]">
              <div className="bg-[#0b1739] p-4 rounded-r-xl flex items-center space-x-3 border-l-4 border-cyan-400">
                <Image
                  src="/license.svg"
                  alt="Created license"
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-xl md:text-2xl font-semibold">2</p>
                  <p className="text-sm text-gray-300">Created Exams</p>
                </div>
              </div>

              <div className="bg-[#0b1739] p-4 rounded-r-xl flex items-center space-x-3 border-l-4 border-cyan-400">
                <Image
                  src="/students.svg"
                  alt="Candidates"
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-xl md:text-2xl font-semibold">23</p>
                  <p className="text-sm text-gray-300">Candidates</p>
                </div>
              </div>

              <div className="bg-[#0b1739] p-4 rounded-r-xl flex items-center space-x-3 border-l-4 border-cyan-400 sm:col-span-2 lg:col-span-1">
                <Image
                  src="/certificate.svg"
                  alt="Certificates"
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-xl md:text-2xl font-semibold">12</p>
                  <p className="text-sm text-gray-300">Certificates Issued</p>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div>
              <h3 className="text-base md:text-lg mb-4 mt-10 font-semibold">
                Created Exams
              </h3>

              {/* Table Container with Horizontal Scroll */}
              <div className="overflow-x-auto rounded-lg shadow border border-gray-700">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#0b1739]">
                      <th className="px-4 py-4 border-b border-gray-700 text-sm font-semibold whitespace-nowrap">
                        Title
                      </th>
                      <th className="px-4 py-4 border-b border-gray-700 text-sm font-semibold whitespace-nowrap">
                        Candidates
                      </th>
                      <th className="px-4 py-4 border-b border-gray-700 text-sm font-semibold whitespace-nowrap">
                        Date
                      </th>
                      <th className="px-4 py-4 border-b border-gray-700 text-sm font-semibold whitespace-nowrap">
                        Certification
                      </th>
                      <th className="px-4 py-4 border-b border-gray-700 text-sm font-semibold whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(institution?.exams || exams).map((exam, i) => (
                      <tr
                        key={i}
                        className="bg-[#00031b] hover:bg-[#0b1739] transition-colors"
                      >
                        <td className="px-4 py-4 border-b border-gray-700 text-sm whitespace-nowrap">
                          {exam.title}
                        </td>
                        <td className="px-4 py-4 border-b border-gray-700 text-sm">
                          {exam.candidates}
                        </td>
                        <td className="px-4 py-4 border-b border-gray-700 text-sm whitespace-nowrap">
                          {exam.date}
                        </td>
                        <td className="px-4 py-4 border-b border-gray-700">
                          <button
                            onClick={() => handleViewCertificate(exam)}
                            className="border border-gray-600 py-1 px-3 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-colors text-sm whitespace-nowrap"
                          >
                            {exam.certification}
                          </button>
                        </td>
                        <td className="px-4 py-4 border-b border-gray-700 text-gray-500">
                          {exam.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Scroll Hint for Mobile */}
              <div className="md:hidden mt-2 text-xs text-gray-400 text-center">
                ← Scroll horizontally to view all columns →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificateModal && selectedExam && (
        <CertificateModal exam={selectedExam} onClose={closeCertificateModal} />
      )}
    </>
  );
}
