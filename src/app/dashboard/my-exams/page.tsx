"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import ZoomRecording from "@/components/exam-pages/ZoomRecording";
import { useExamStore } from "@/components/exam-pages/Exam-Store";
import MobileDetection from "@/components/exam-pages/MobileDectection";

export default function ExamPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  
  const { 
    currentQuestion,
    totalQuestions,
    timeLeft,
    selectedAnswers,
    setCurrentQuestion,
    setAnswer
  } = useExamStore();

  // Check if the user is on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      useExamStore.getState().decrementTime();
      
      // Auto-submit when time runs out
      if (useExamStore.getState().timeLeft <= 0) {
        clearInterval(timer);
        router.push("/dashboard/my-exams/preview");
      }
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [router]);

  // If on mobile, show mobile detection component
  if (isMobile) {
    return <MobileDetection />;
  }

  const progressValue = (currentQuestion / totalQuestions) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleOptionSelect = (option: number) => {
    setAnswer(currentQuestion, option);
  };

  const navigateToQuestion = (questionNumber: number) => {
    setCurrentQuestion(questionNumber);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handlePreview = () => {
    router.push("/dashboard/my-exams/preview");
  };

  const handleFinish = () => {
    router.push("/dashboard/my-exams/submit");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b py-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-[#060812]">Institutions Name</h1>
            <p className="text-sm text-gray-500">Solidity Basic Exam</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm text-[#060812] mb-2">
              {currentQuestion} of {totalQuestions} Questions
            </div>
            <Progress value={progressValue} className="w-64 h-2 " />
          </div>
          <div className="text-center">
            <div className="text-lg font-medium text-[#060812]">
              {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} Min
            </div>
            <div className="text-sm text-gray-500">Time Left</div>
          </div>
          <div>
            <div className="flex gap-2">
              <Button size='lg' variant="outline" onClick={handlePreview} className="text-[#060812] border rounded-full border-[#060812]">
                Preview
              </Button>
              <Button size='lg' onClick={handleFinish} className="text-[#060812] bg-transparent border rounded-full border-[#060812] hover:text-white">Finish</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white rounded-sm mb-12 shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-base font-medium text-[#595959]">Instructions</h2>
                <p className="text-lg font-semibold mt-2 text-[#060812]">Select The Correct Option.</p>
              </div>

              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h3 className="text-base font-medium text-[#595959] mb-2">Question {currentQuestion}</h3>
                  <p className="text-lg font-semibold text-[#060812]">
                    Which Of The Following Best Describes How A Smart Contract Operates On A Blockchain?
                  </p>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3, 4].map((option) => (
                    <div key={option} className="flex items-center space-x-2 border-l-4 pl-4 py-2 border-transparent hover:border-blue-500 transition-all">
                      <Checkbox 
                        id={`option-${option}`} 
                        checked={selectedAnswers[currentQuestion] === option}
                        onCheckedChange={() => handleOptionSelect(option)}
                     className="" />
                      <label
                        htmlFor={`option-${option}`}
                        className="text-base text-[#060812] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Option {option}
                      </label>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 flex items-center">
                  You Are Being Recorded <span className="ml-2 h-2 w-2 rounded-full bg-red-500"></span>
                </p>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <ZoomRecording />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="outline" size='lg' onClick={handlePrevious} disabled={currentQuestion === 1} className="text-[#060812] border rounded-full border-[#060812]">
            Previous
          </Button>
          
          <div className="flex-1 flex justify-center">
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
                <Button
                  key={num}
                  variant={currentQuestion === num ? "pignation" : "outline"}
                  size="sm"
                  className="rounded-full h-8 w-8 p-0 text-[#060812] border  border-[#060812]"
                  onClick={() => navigateToQuestion(num)}
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>
          
          <Button size='lg' onClick={handleNext} disabled={currentQuestion === totalQuestions} className="text-[#060812] hover:text-white bg-transparent border rounded-full border-[#060812]">
            Next
          </Button>
        </div>
      </footer>
    </div>
  );
}