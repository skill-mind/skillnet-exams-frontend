// PreviewQuestions.jsx

"use client";
import React from "react";
import Link from "next/link";
import CertificateModal from "@/components/dashboard/user/certificate-modal";
import { useState } from "react";

const PreviewQuestions = ({
  questions,
}: {
  questions: Array<{ id: number; option: string; answered: boolean }>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const candidateData = {
    examTitle: "Dummy Exam Title",
    score: "85%",
    date: "June 4, 2025",
    candidateName: "John Doe",
  };

  return (
    <div className="border border-[#C3C3C3] rounded-lg my-6 pb-6">
      {/* Title */}
      <div className="p-6 border-b border-[#C3C3C3] mb-4 flex items-center">
        <h2 className="text-base font-semibold text-[#060812]">Preview</h2>
      </div>

      {/* Questions Grid */}
      <div className="grid px-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="flex items-center justify-between  rounded-md  py-2"
          >
            <span className="text-base font-medium text-[#595959]">
              Q{q.id}.
            </span>
            <div className="flex items-center gap-8">
              <span className="flex-1 text-base text-[#060812] ml-1 truncate">
                {q.option}
              </span>
              <input
                type="checkbox"
                checked={q.answered}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-300"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center md:flex-row flex-col justify-between px-6">
        {/* Legend */}
        <div className="flex items-center space-x-6 mt-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={true}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-300"
            />
            <span className="text-sm text-[#060812]">Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={false}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-300"
            />
            <span className="text-sm text-[#060812]">Not answered</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <Link href="/dashboard/exam-page">
            <button className="px-5 py-2 border border-[#060812] rounded-full text-sm font-medium text-[#060812] hover:bg-gray-100">
              Go back
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2 border border-[#060812] rounded-full text-sm font-medium text-[#060812] hover:bg-gray-100"
          >
            Submit
          </button>
        </div>
      </div>
      <CertificateModal
        candidateData={candidateData}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default PreviewQuestions;
