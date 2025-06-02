"use client";
import React from "react";
import ExamHeaderDefault from "@/components/exam-page/exam-header-default";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

const ExamSubmissionPage = () => {
  const router = useRouter();

  if (isMobile) {
    router.push("/dashboard/exam-page/mobile-not-allowed");
  }
  return (
    <div className="flex flex-col bg-[#F1EFEF]">
      {/* Header */}
      <ExamHeaderDefault />
      {/* Content */}
      <main className="flex-1 px-6 py-10 space-y-6 container mx-auto">
        <div className=" rounded-md text-xl">
          <p className="rounded-md font-semibold text-[#060812] border border-[#C3C3C3] p-6 text-xl">
            Are you sure you want to end the exam?
          </p>
        </div>
        <div className=" rounded-md border border-[#C3C3C3]">
          <p className="font-semibold text-[#060812]  border-b border-[#C3C3C3] p-6 text-xl">
            Once you submit:
          </p>
          <ul className="list-disc py-3 flex flex-col gap-4 list-inside text-[#060812] space-y-1 pl-4">
            <li>All answered questions will be recorded.</li>
            <li>You cannot go back and make changes.</li>
            <li>Your final score will be calculated immediately.</li>
          </ul>
        </div>
        <div className=" rounded-md border border-[#C3C3C3]">
          <p className="font-semibold text-[#060812]  border-b border-[#C3C3C3] p-6 text-xl">
            If you still have time left, you can continue answering.
          </p>
          <ul className="list-disc py-3 flex flex-col gap-4 list-inside text-[#060812] space-y-1 pl-4">
            <li>Click "Yes, Submit Exam" to finalize.</li>
            <li>Click "Cancel" to go back.</li>
          </ul>
        </div>
      </main>
      {/* Footer */}
      <footer className="text-center py-4 border-t text-base font-semibold text-[#060812] bg-[#D3D3D3]">
        Powered By SkillNet
      </footer>
    </div>
  );
};

export default ExamSubmissionPage;
