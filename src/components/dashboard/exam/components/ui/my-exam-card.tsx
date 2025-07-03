"use client"
import Image from "next/image";
import { useState } from "react";
import { buffer } from "stream/consumers";
import CertificationModal from "../modals/course-detail-modal";

// Function to handle click for taking exam


const MyExamCard = function ({
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
  }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleCLickRegisterExam = () => {
    setIsOpen(prev=>!prev)
  };
  
  return (
    <div className="bg-[#0B1739] max-w-[221px] p-6 rounded-2xl justify-center">
      <CertificationModal
        isOpen={isOpen}
        onClose={handleCLickRegisterExam}
        examInfo={{
          title,
          icon,
          aboutExam:
            "The Solidity Programming test evaluates candidates’ ability to develop smart contracts using the Solidity language on the Ethereum Virtual Machine (EVM). This test assesses a candidate’s understanding of core Solidity concepts such as state variables, functions, data structures, modifiers, and events. It also evaluates their ability to write secure, gas-efficient, and maintainable code, ensuring they can build and interact with decentralized applications (dApps) in a Web3 environment.",
          price: "400",
          isCompleted,
          institution: "Institution’s Name",
          description,
          date: "2025",
          coveredSkills: [
            { title: "solidity", id: 1 },
            { title: "javascript", id: 2 },
            { title: "rust", id: 3 },
          ],
          category:"blockchain",
        }}
      />
      <div className="flex self-center justify-center mb-3">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-white text-lg text-center font-medium mb-2">
        {title}
      </h3>
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
          onClick={handleCLickRegisterExam}
          className="text-white border border-[#F4F9FF] rounded-full py-2 px-4 w-full hover:bg-gray-700 transition-colors"
        >
          Register for Exam
        </button>
      )}
    </div>
  );
  }


export default MyExamCard;
