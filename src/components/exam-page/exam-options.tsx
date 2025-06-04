import React from "react";

export default function ExamOptions({
  currentQuestionData,
  selectedAnswers,
  handleOptionSelect,
  currentQuestion,
}: {
  currentQuestionData: {
    options: string[];
  };
  selectedAnswers: {
    [key: number]: number;
  };
  handleOptionSelect: (questionIndex: number, optionIndex: number) => void;
  currentQuestion: number;
}) {
  return (
    <div className="space-y-3">
      {currentQuestionData.options.map((option, index) => {
        const isSelected = selectedAnswers[currentQuestion] === index;
        return (
          <label
            key={index}
            className={`relative flex items-center pl-8 py-4 rounded-lg cursor-pointer transition-all hover:bg-gray-50}`}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleOptionSelect(currentQuestion, index)}
              className="w-5 h-5 text-blue-500 border-2 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-base text-black font-medium">
              Option {index + 1}
            </span>
            {isSelected && (
              <div className="ml-2 w-[2px] h-[80%] bg-[#1D88FE] rounded-full absolute left-0 bottom-0 top-0 my-auto"></div>
            )}
          </label>
        );
      })}
    </div>
  );
}
