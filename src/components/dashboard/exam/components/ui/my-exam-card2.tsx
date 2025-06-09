'use client';

import Image from "next/image";
import TakeExamFlow from '../modals/take-exams-flow-modal';
import { useState } from 'react';

const MyExamCard = ({
  title,
  icon,
  description,
  isCompleted,
  handleCLick,
}: {
  title: string;
  icon: string;
  description: string;
  isCompleted: boolean;
  handleCLick: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<"verify" | "success" | "instructions" | null>("verify");

  // Function to handle click for taking exam
  const handleClickTakeExam = () => {
    setShowModal(true);
    setStep("verify"); // Start with the verify step
  };

  return (
    <>
      <div className="bg-[#0B1739] max-w-[221px] p-6 rounded-2xl justify-center">
        <div className="flex self-center justify-center mb-3">
          <Image src={icon} alt={title} width={48} height={48} />
        </div>
        <h3 className="text-white text-lg text-center font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm text-center mb-4">{description}</p>
        {isCompleted ? (
          <button
            onClick={handleCLick}
            className="text-white border border-[#F4F9FF] rounded-full py-2 px-4 w-full hover:bg-gray-700 transition-colors"
          >
            View Exam
          </button>
        ) : (
          <button
            onClick={handleClickTakeExam}
            className="text-white border border-[#F4F9FF] rounded-full py-2 px-4 w-full hover:bg-gray-700 transition-colors"
          >
            Take exam
          </button>
        )}
      </div>

      <TakeExamFlow 
        showTakeExamsModal={showModal} 
        setShowTakeExamsModal={setShowModal} 
        step={step} 
        setStep={setStep} 
      />
    </>
  );
};

export default MyExamCard;