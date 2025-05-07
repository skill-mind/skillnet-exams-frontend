"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useExamStore } from "@/components/exam-pages/Exam-Store";

export default function ExamPreviewPage() {
  const router = useRouter();
  const { selectedAnswers, totalQuestions, timeLeft } = useExamStore();
  
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
        router.push("/dashboard/my-exams/submit");
      }
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [router]);

  const handleGoBack = () => {
    router.push("/dashboard/my-exams");
  };

  const handleSubmit = () => {
    router.push("/dashboard/my-exams/submit");
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

  // Group questions in rows of 5 for display
  const questionRows = [];
  for (let i = 1; i <= totalQuestions; i += 5) {
    const row = [];
    for (let j = i; j < i + 5 && j <= totalQuestions; j++) {
      row.push(j);
    }
    questionRows.push(row);
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
          <div>
            <div className="flex gap-2">
            <Button size='lg' variant="outline"  className="text-[#060812] border rounded-full border-[#060812]">
                Preview
              </Button>
              <Button size='lg'  className="text-[#060812] bg-transparent border rounded-full border-[#060812] hover:text-white">Finish</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-6">Preview</h2>
            
            <div className="space-y-6">
              {questionRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-4">
                  {row.map((questionNum) => (
                    <div key={questionNum} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Q{questionNum}.</span>
                      <span className="text-sm font-medium">Option {selectedAnswers[questionNum] }</span>
                      <Checkbox 
                        checked={selectedAnswers[questionNum] !== undefined}
                        className="ml-2"
                        disabled
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Checkbox checked id="answered" className="mr-2 " disabled />
                  <label htmlFor="answered" className="text-sm font-medium">Answered</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="not-answered" className="mr-2 " disabled />
                  <label htmlFor="not-answered" className="text-sm font-medium">Not answered</label>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleGoBack} size='lg'  className="text-[#060812] bg-transparent border rounded-full border-[#060812]">Go back</Button>
                <Button onClick={handleSubmit} size='lg'  className="text-[#060812] bg-transparent border rounded-full border-[#060812] hover:text-white">Submit</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
