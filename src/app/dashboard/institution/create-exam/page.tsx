"use client";

import { Suspense, useState } from "react";
import { Plus, Pen } from "lucide-react";
import Image from "next/image";
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PublishModal from "@/components/dashboard/institution/components/modals/publish-exam-modal"; // ✅ Correct import

interface ExamDraft {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function InstitutionDashboardPage() {
  const examDrafts: ExamDraft[] = [
    {
      id: 1,
      title: "Design Thinking",
      description:
        "Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.",
      icon: "/design thinking.png",
    },
    {
      id: 2,
      title: "Web3 Basics",
      description:
        "Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.",
      icon: "/Web3 basics.png",
    },
  ];

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ExamDraft | null>(null);

  const handlePublishClick = (exam: ExamDraft) => {
    setSelectedExam(exam);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExam(null);
  };

  return (
    <InstitutionLayout title="Create Exams" activePage="Create-Exam">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-medium text-white">Drafts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {examDrafts.map((exam) => (
               <Card
               key={exam.id}
               className="bg-[#0A1232] border-[#343B4F] border-2 py-10 flex flex-col items-center text-center"
             >
               <div className="mb-4">
                 <Image
                   src={exam.icon || "/placeholder.svg"}
                   alt=""
                   width={80}
                   height={80}
                   className="rounded-md"
                 />
               </div>
               <h3 className="text-xl font-semibold mb-2 text-white">
                 {exam.title}
               </h3>
               <p className="text-gray-400 text-sm mb-6 w-[80%] flex-grow">
                 {exam.description}
               </p>
               <div className="flex items-center gap-2 mt-auto">
                 <Button
                   className="bg-[#26B9C8] hover:bg-[#1A8A96] text-white rounded-full px-8"
                   onClick={() => handlePublishClick(exam)}
                 >
                   Publish
                 </Button>
                 <Button
                   variant="outline"
                   size="icon"
                   className="rounded-full border-[#1FACAA] text-white p-2"
                 >
                   <Pen className="h-4 w-4 text-white hover:text-[#1FACAA]" />
                 </Button>
               </div>
             </Card>
             
             
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-white">
              Create New Exam
            </h2>
            <Card className="bg-[#0A1232] border-none p-12 flex flex-col items-center justify-center text-center">
              <p className="text-gray-400 mb-8">
                Create a new exam, and publish for candidates
              </p>
              <div className="mb-6">
                <Link href="/dashboard/institution/create-exam/create-an-exam">
                  <Button
                    size="icon"
                    className="h-16 w-16 rounded-full bg-[#26B9C8] hover:bg-[#1A8A96]"
                  >
                    <Plus className="h-8 w-8" />
                  </Button>
                </Link>
              </div>
              <Link href="/dashboard/institution/create-exam/create-an-exam">
                <Button className="bg-[#0A1232] border border-[#26B9C8] text-white hover:bg-[#0D1A3F] rounded-full px-8">
                  Create Exams
                </Button>
              </Link>
            </Card>
          </section>

          {/* Publish Modal */}
          {showModal && selectedExam && (
            <PublishModal
              exam={{
                id: selectedExam.id,
                title: selectedExam.title,
                description: selectedExam.description,
                duration: "60 minutes", // Provide dummy values or real if available
                level: "Intermediate",
                language: "English",
                certification: true,
              }}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </Suspense>
    </InstitutionLayout>
  );
}
