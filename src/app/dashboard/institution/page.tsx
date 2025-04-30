"use client";

import { Suspense } from "react";
import { useState } from "react";
import { Bell, FileText, Users, Award } from "lucide-react";
import Link from "next/link";
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout";
import ExamCard from "@/components/dashboard/institution/components/exam-card";
import ExamHistoryTable from "@/components/dashboard/institution/components/exam-history-table";
import ExamDetailsModal from "@/components/dashboard/institution/components/modals/exam-details-modal";
import { Providers } from "@/components/Providers";
import { WalletProvider } from "@/components/WalletProvider";
import { useWalletContext } from "@/components/WalletProvider";

// Define exam type for better type safety
interface ExamType {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  language: string;
  certification: boolean;
  img: string;
}

export default function InstitutionDashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ExamType | null>(null);

  // wallet destructure
  const { account, disconnectWallet } = useWalletContext();


  const handleOpenModal = (exam: ExamType) => {
    setSelectedExam(exam);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Sample exam data
  const exams: ExamType[] = [
    {
      id: 1,
      title: "Solidity",
      description:
        "Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.",
      duration: "60 Min",
      level: "Beginner",
      language: "English",
      certification: true,
      img: "/Solidity.png",
    },
    {
      id: 2,
      title: "JavaScript",
      description:
        "Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.",
      duration: "45 Min",
      level: "Intermediate",
      language: "English",
      certification: true,
      img: "/Javascript.png",
    },
  ];

  return (
    <Providers>
      <WalletProvider>
        <InstitutionLayout title="Institution Dashboard" activePage="Dashboard">
          <Suspense fallback={<div>Loading...</div>}>
            {isModalOpen && selectedExam && (
              <ExamDetailsModal
                exam={selectedExam}
                onClose={handleCloseModal}
              />
            )}

            <div className="container mx-auto px-4">
              {/* Institution Header */}
              <div className="mb-8">
                <h2 className="text-2xl">
                  For, <span className="font-semibold">Institution</span>
                </h2>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <div className="bg-[#0f1c3f] p-4 rounded-lg border-l-4 border-teal-400">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#0f1c3f] p-2 rounded-md">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">2</h3>
                      <p className="text-sm text-gray-300">Created Exams</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f1c3f] p-4 rounded-lg border-l-4 border-teal-400">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#0f1c3f] p-2 rounded-md">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">23</h3>
                      <p className="text-sm text-gray-300">Candidates</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f1c3f] p-4 rounded-lg border-l-4 border-teal-400">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#0f1c3f] p-2 rounded-md">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">12</h3>
                      <p className="text-sm text-gray-300">
                        Certificates Issued
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exams and Drafts Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Created Exams Section */}
                <div>
                  <h2 className="text-xl mb-4 text-gray-300">Created Exams</h2>
                  <div className="bg-[#0f1c3f] rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {exams.map((exam) => (
                        <ExamCard
                          key={exam.id}
                          exam={exam}
                          onTakeExam={() => handleOpenModal(exam)}
                        />
                      ))}
                    </div>
                    <Link
                      href="/exams"
                      className="block w-full text-center py-3 bg-[#0a1128] hover:bg-black rounded-lg transition-colors"
                    >
                      Go To Page
                    </Link>
                  </div>
                </div>

                {/* Drafts Section */}
                <div>
                  <h2 className="text-xl mb-4 text-gray-300">Drafts</h2>
                  <div className="bg-[#0f1c3f] rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {exams.map((exam) => (
                        <ExamCard
                          key={`draft-${exam.id}`}
                          exam={exam}
                          onTakeExam={() => handleOpenModal(exam)}
                        />
                      ))}
                    </div>
                    <Link
                      href="/exams"
                      className="block w-full text-center py-3 bg-[#0a1128] hover:bg-black rounded-lg transition-colors"
                    >
                      Go To Page
                    </Link>
                  </div>
                </div>
              </div>

              {/* Exam History */}
              <div>
                <h2 className="text-xl mb-4 text-gray-300">Exam History</h2>
                <ExamHistoryTable />
              </div>
            </div>
          </Suspense>
        </InstitutionLayout>
      </WalletProvider>
    </Providers>
  );
}
