"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useExamStore } from "@/components/exam-pages/Exam-Store";
export default function ExamSubmitPage() {
  const router = useRouter();
  const { timeLeft, totalQuestions, selectedAnswers, submitExam } = useExamStore();
  
  const [isMobile, setIsMobile] = useState(false);

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
        handleSubmitExam();
      }
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  const handleGoBack = () => {
    router.push("/dashboard/my-exams");
  };

  const handleSubmitExam = () => {
    submitExam();
    router.push("/dashboard/my-exams/complete");
  };

  // Calculate progress
  const progress = (Object.keys(selectedAnswers).length / totalQuestions) * 100;
  
  // Format time
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // If on mobile, redirect to exam page with warning
  if (isMobile) {
    router.push("/dashboard/my-exams");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-[#060812]">
      <header className="border-b py-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Institutions Name</h1>
            <p className="text-sm text-gray-500">Solidity Basic Exam</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-500 mb-2">
              {Object.keys(selectedAnswers).length} of {totalQuestions} Questions
            </div>
            <Progress value={progress} className="w-64 h-2" />
          </div>
          <div className="text-center">
            <div className="text-lg font-medium">
              {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} Min
            </div>
            <div className="text-sm text-gray-500">Time Left</div>
          </div>
        </div>
      </header>

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
           <div className="border rounded-lg shadow-sm p-4"> <h2 className="text-xl font-semibold ">Are you sure you want to end the exam?</h2>
           </div>
            <div className="border rounded-lg shadow-sm  my-6 ">
              <h3 className="text-lg font-medium mb-4 border-b  p-4 shadow-sm pb-4">Once you submit:</h3>
              
              <ul className="space-y-4 p-4">
                <li className="flex items-start">
                  <span className="text-lg mr-2">•</span>
                  <span>All answered questions will be recorded.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">•</span>
                  <span>You cannot go back and make changes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">•</span>
                  <span>Your final score will be calculated immediately.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6 border rounded-lg shadow-sm ">
              <h3 className="text-lg font-medium mb-4 p-4 border-b shadow-sm">If you still have time left, you can continue answering.</h3>
              
              <ul className="space-y-4 p-4">
                <li className="flex items-start">
                  <span className="text-lg mr-2">•</span>
                  <span>Click "Yes, Submit Exam" to finalize.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">•</span>
                  <span>Click "Cancel" to go back.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <Button variant="outline" onClick={handleGoBack} size='lg'  className="text-[#060812] bg-transparent border rounded-full border-[#060812] ">
                Cancel
              </Button>
              <Button onClick={handleSubmitExam} size='lg'  className="text-[#060812] bg-transparent border rounded-full border-[#060812] hover:text-white">
                Yes, Submit Exam
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
