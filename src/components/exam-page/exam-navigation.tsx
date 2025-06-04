import { ExamData } from "@/app/dashboard/exam-page/types/exam-data.types";


export default function ExamNavigation({
    currentQuestion,
    examData,
    goToPrevious,
    goToNext,
    goToQuestion,
    selectedAnswers,
}: {
    currentQuestion: number;
    examData: ExamData;
    goToPrevious: () => void;
    goToNext: () => void;
    goToQuestion: (questionIndex: number) => void;
    selectedAnswers: {
        [key: number]: number;
    };
}) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={goToPrevious}
        disabled={currentQuestion === 0}
        className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      {/* Question Numbers */}
      <div className="flex items-center gap-2 flex-wrap max-w-lg">
        {examData.questions.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => goToQuestion(index)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              currentQuestion === index
                ? "bg-[#6F6F6F33] text-black"
                : selectedAnswers[index] !== undefined
                ? "bg-blue-100 text-blue-700 border border-blue-300"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        {examData.totalQuestions > 10 && (
          <>
            <span className="text-gray-400">•••</span>
            <button
              onClick={() => goToQuestion(examData.totalQuestions - 1)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                currentQuestion === examData.totalQuestions - 1
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {examData.totalQuestions}
            </button>
          </>
        )}
      </div>

      <button
        onClick={goToNext}
        disabled={currentQuestion === examData.questions.length - 1}
        className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
}
