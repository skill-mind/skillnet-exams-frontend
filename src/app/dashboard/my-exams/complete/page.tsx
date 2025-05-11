"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useExamStore } from "@/components/exam-pages/Exam-Store";
export default function ExamCompletePage() {
  const { score, resetExam } = useExamStore();

  
  useEffect(() => {
    
    return () => {
      // Cleanup zoom
    };
  }, []);

  const handleClose = () => {
    resetExam();
    window.location.href = '/dashboard'; 
  };

  const handleViewCertificate = () => {
  
    alert("Certificate viewing functionality would be implemented here.");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#060812]">
      <header className="border-b py-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Institutions Name</h1>
            <p className="text-sm text-gray-500">Solidity Basic Exam</p>
          </div>
          <Button size='lg' variant="outline"  className="text-[#060812] border rounded-full border-[#060812]" onClick={handleClose}>
            Close
          </Button>
        </div>
      </header>

      <main className="py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-1 min-h-[80vh]">
        <motion.div
          className="max-w-lg w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-8">
            Thank You For Taking The Solidity Basic Certification Exam
          </h1>
          
          <div className="mb-8">
            <h2 className="text-lg text-gray-600 mb-2">Your score</h2>
            <p className="text-4xl font-bold">{score}/100</p>
          </div>
          
          <Button onClick={handleViewCertificate} size='lg' variant="outline"  className="text-[#060812] border rounded-full border-[#060812]">
            View Certificate
          </Button>
        </motion.div>
      </main>

      <footer className="py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 border-t">
        Powered By SkillNet
      </footer>
    </div>
  );
}