"use client";

import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';
import { StatCard } from '@/components/dashboard/exam/components/ui/exams-page-content-header';
import MyExamCard from '@/components/dashboard/exam/components/ui/my-exam-card';
import ExamIcon from "../../../../../public/license.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";
import { examData } from '@/components/dashboard/exam/examdata';
import CertificationModal from '@/components/dashboard/exam/components/modals/course-detail-modal';
import { useState } from 'react';
import TakeExamFlow from '@/components/dashboard/exam/components/modals/take-exams-flow-modal';
import { examInfoProps } from '../register-exam/page';



export default function MyExams() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isExamModalOpen, setIsExamModalOpen] = useState(false)
  const [selectedExam, setSelectedExam] = useState<examInfoProps | null>(null)

  const [step, setStep] = useState<"verify" | "success" | "instructions" | null>(null);


  const openVerifyModal = () => {
    setStep("verify");
    setIsExamModalOpen(true);
  };



  return (
    <DashboardLayout title="Exams" activePage="my-exams">
      {/* Exam Stats */}
      <div className="flex flex-wrap gap-4 mb-8">
        <StatCard icon={RegisterIcon} count={1} label="Registered Exams" />
        <StatCard icon={ExamIcon} count={3} label="Exams Taken" />
      </div>

      {/* Registered Exams Section */}
      <div className="mb-8">
        <h2 className="text-white text-lg font-medium mb-4">Registered Exams</h2>
        <div className="flex flex-wrap gap-10">
          {examData.filter((item) => !item.isCompleted).map((exam, index) => (
            <MyExamCard
              key={index}
              title={exam.title}
              icon={exam.icon}
              description={exam.description}
              isCompleted={exam.isCompleted}
              handleCLick={() => {
                setSelectedExam(exam)
                openVerifyModal()
              }}
            />
          ))}
        </div>
        <CertificationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          examInfo={selectedExam}
        />
        <TakeExamFlow step={step} setStep={setStep} showTakeExamsModal={isExamModalOpen} setShowTakeExamsModal={() => { }} />
      </div>

      {/* Exams Taken Section */}
      <div className="mb-8">
        <h2 className="text-white text-lg font-medium mb-4">Exams Taken</h2>
        <div className="flex flex-wrap gap-10">
          {examData.filter((item) => item.isCompleted).map((exam, index) => (
            <MyExamCard
              key={index}
              title={exam.title}
              icon={exam.icon}
              description={exam.description}
              isCompleted={exam.isCompleted}
              handleCLick={() => { }}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}