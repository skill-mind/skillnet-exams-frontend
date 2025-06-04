"use client";

import React, { useState, useEffect } from "react";
import { examData } from "@/components/exam-page/data/exam-data";
import ExamNavigation from "@/components/exam-page/exam-navigation";
import ExamPageHeader from "@/components/exam-page/header";
import ExamOptions from "@/components/exam-page/exam-options";
import dynamic from "next/dynamic";
import { useMobileRedirect } from "@/hooks/useMobileRedirect";

const CameraFeed = dynamic(() => import("@/components/exam-page/camera-feed"), {
  ssr: false,
});

// Dummy exam data

export default function ExamPage() {
  useMobileRedirect("/dashboard/exam-page/mobile-not-allowed");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});

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
        handlePreview={handlePreview}
        handleFinish={handleFinish}
        formatTime={formatTime}
      />

      {/* Main Content */}
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Question Content */}
        <div className="flex-1">
          <div className="flex md:flex-row flex-col gap-6 justify-between">
            <div className=" w-full">
              {/* Instructions */}
              <div className="mb-6">
                <h2 className=" font-medium text-[#595959] mb-2 text-base">
                  Instructions
                </h2>
                <p className="text-black font-medium">
                  Select The Correct Option.
                </p>
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
            </div>
            <CameraFeed />
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
