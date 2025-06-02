import { ExamData } from "@/app/dashboard/exam-page/types/exam-data.types";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExamPageHeader({
  examData,
  currentQuestion,
  progress,
  handlePreview,
  handleFinish,
  formatTime,
}: {
  examData: ExamData;
  currentQuestion: number;
  progress: number;
  handlePreview: () => void;
  handleFinish: () => void;
  formatTime: (seconds: number) => string;
}) {
  
  const [timeLeft, setTimeLeft] = useState(examData.timeLimit * 60); // Convert to seconds

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

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-4 border-b border-[#C3C3C3] bg-white">
      {/* Left Section: Institution + Exam Title */}
      <div className="mb-4 sm:mb-0 flex-shrink-0">
        <h1 className="text-base sm:text-sm font-semibold text-[#060812]">
          {examData.institutionName}
        </h1>
        <p className="text-sm text-[#595959]">{examData.examTitle}</p>
      </div>

      {/* Right Section: Progress / Timer / Buttons */}
      <div className="flex flex-col justify-between max-w-5xl !w-full sm:flex-row items-start sm:items-center gap-4 sm:gap-6 sm:w-auto">
        {/* Progress Info */}
        <div className="flex flex-col items-start sm:items-center gap-1 w-full sm:w-auto">
          <p className="text-sm font-medium text-[#060812] w-full">
            {currentQuestion + 1} of {examData.totalQuestions} Questions
          </p>
          <div className="w-full sm:w-48 md:w-80 h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
            <div
              className="bg-[#3C83F9] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Timer */}
        <div className="flex flex-col items-start sm:items-center gap-1 w-full sm:w-auto">
          <p className="flex items-center gap-1 text-sm font-semibold text-[#060812]">
            <Clock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </p>
          <p className="text-sm text-[#595959]">Time Left</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={handlePreview}
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2 border border-[#545A64] rounded-full text-[#060812] text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Preview
          </button>
          <button
            onClick={handleFinish}
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2 border border-[#545A64] rounded-full text-[#060812] text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Finish
          </button>
        </div>
      </div>
    </header>
  );
}
