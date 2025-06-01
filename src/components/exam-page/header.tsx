import React from "react";

export default function ExamPageHeader() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-4 border-b border-[#C3C3C3]">
      {/* Left Section */}
      <div className="mb-4 sm:mb-0">
        <h1 className="text-base sm:text-sm font-semibold text-[#060812]">
          Institutions Name
        </h1>
        <p className="text-sm text-[#595959]">Solidity Basic Exam</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
        {/* Progress Info */}
        <div className="flex flex-col items-start sm:items-center gap-1 w-full sm:w-auto">
          <p className="text-sm font-medium text-[#060812]">
            14 of 24 Questions
          </p>
          <div className="w-full sm:w-36 h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
            <div className="bg-[#3C83F9] h-1 rounded-full w-[58%]"></div>
          </div>
        </div>

        {/* Timer */}
        <div className="flex flex-col items-start sm:items-center gap-1 w-full sm:w-auto">
          <p className="text-sm font-semibold text-[#060812]">20:10 Min</p>
          <p className="text-sm text-[#595959]">Time Left</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 border border-[#545A64] rounded-full text-[#060812] text-sm font-medium hover:bg-gray-100">
            Preview
          </button>
          <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 border border-[#545A64] rounded-full text-[#060812] text-sm font-medium hover:bg-gray-100">
            Finish
          </button>
        </div>
      </div>
    </header>
  );
}
