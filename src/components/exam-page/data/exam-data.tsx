import { ExamData } from "@/app/dashboard/exam-page/types/exam-data.types";

export const examData: ExamData = {
  institutionName: "Institutions Name",
  examTitle: "Solidity Basic Exam",
  totalQuestions: 24,
  timeLimit: 60, // minutes
  questions: [
    {
      id: 1,
      question:
        "Which Of The Following Best Describes How A Smart Contract Operates On A Blockchain?",
      options: [
        "It runs automatically when predetermined conditions are met",
        "It requires manual execution by network administrators",
        "It only executes during specific time windows",
        "It needs approval from all network participants",
      ],
    },
    {
      id: 2,
      question:
        "What is the primary programming language used for Ethereum smart contracts?",
      options: ["JavaScript", "Solidity", "Python", "C++"],
    },
    {
      id: 3,
      question:
        "Which of the following is NOT a characteristic of blockchain technology?",
      options: [
        "Decentralization",
        "Immutability",
        "Centralized control",
        "Transparency",
      ],
    },
    {
      id: 4,
      question: "What does 'gas' refer to in Ethereum transactions?",
      options: [
        "The physical energy consumed",
        "The computational fee required",
        "The storage space used",
        "The network bandwidth",
      ],
    },
    {
      id: 5,
      question: "Which consensus mechanism does Ethereum 2.0 use?",
      options: [
        "Proof of Work",
        "Proof of Stake",
        "Delegated Proof of Stake",
        "Proof of Authority",
      ],
    },
    // Add more questions to reach 24 total
    ...Array.from({ length: 19 }, (_, i) => ({
      id: i + 6,
      question: `Sample question ${
        i + 6
      } about blockchain and smart contract development?`,
      options: [
        `Option A for question ${i + 6}`,
        `Option B for question ${i + 6}`,
        `Option C for question ${i + 6}`,
        `Option D for question ${i + 6}`,
      ],
    })),
  ],
};
