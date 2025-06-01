"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { ExamData } from "./types/exam-data.types";
import ExamNavigation from "@/components/exam-page/exam-navigation";
import ExamPageHeader from "@/components/exam-page/header";
import ExamOptions from "@/components/exam-page/exam-options";

// Dummy exam data

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

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [timeLeft, setTimeLeft] = useState(examData.timeLimit * 60); // Convert to seconds
  const [isRecording, setIsRecording] = useState(true);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit exam when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle option selection
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  // Navigation functions
  const goToQuestion = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < examData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreview = () => {
    // Show preview/summary of all answers
    console.log("Preview answers:", selectedAnswers);
  };

  const handleFinish = () => {
    // Submit exam
    console.log("Finishing exam with answers:", selectedAnswers);
    alert("Exam submitted successfully!");
  };

  const currentQuestionData = examData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / examData.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <ExamPageHeader
        examData={examData}
        currentQuestion={currentQuestion}
        progress={progress}
        timeLeft={timeLeft}
        handlePreview={handlePreview}
        handleFinish={handleFinish}
        formatTime={formatTime}
      />

      {/* Main Content */}
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Question Content */}
        <div className="flex-1">
          {/* Instructions */}
          <div className="mb-6">
            <h2 className=" font-medium text-[#595959] mb-2 text-base">
              Instructions
            </h2>
            <p className="text-black font-medium">Select The Correct Option.</p>
          </div>

          {/* Question */}
          <div className=" mb-6">
            <h3 className="text-base text-[#595959] font-medium mb-2">
              Question {currentQuestion + 1}
            </h3>
            <p className="text-black text-base font-medium mb-6">
              {currentQuestionData.question}
            </p>

            {/* Options */}
            <ExamOptions
              currentQuestionData={currentQuestionData}
              selectedAnswers={selectedAnswers}
              handleOptionSelect={handleOptionSelect}
              currentQuestion={currentQuestion}
            />
          </div>

          {/* Navigation */}
          <ExamNavigation
            currentQuestion={currentQuestion}
            examData={examData}
            goToPrevious={goToPrevious}
            goToNext={goToNext}
            goToQuestion={goToQuestion}
            selectedAnswers={selectedAnswers}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">Powered By SkillNet</p>
        </div>
      </div>
    </div>
  );
}
