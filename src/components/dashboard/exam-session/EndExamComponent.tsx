"use client";
import React from 'react';

interface EndExamComponentProps {
  score?: number;
  onCancel?: () => void;
  onSubmit?: () => void;
}

export default function EndExamComponent({ score = 0, onCancel, onSubmit }: EndExamComponentProps) {
  return (
    <div className="w-full max-w-[1240px] mx-auto mt-8 md:mt-[190px] flex flex-col gap-6">
      {/* Confirmation Question */}
      <section className="w-full rounded-lg border border-[#313130]">
        <div className="p-4 md:p-6 border-b border-[#313130]">
          <h1 className="font-['Ubuntu_Sans'] font-semibold text-lg md:text-xl lg:text-2xl text-[#FCFCFC]">
            Are you sure you want to end the exam?
          </h1>
        </div>
      </section>

      {/* Warning Section */}
      <section className="w-full rounded-lg border border-[#313130]">
        <div className="p-4 md:p-6 border-b border-[#313130]">
          <h2 className="font-['Ubuntu_Sans'] font-semibold text-lg md:text-xl text-[#FCFCFC]">
            Once you submit:
          </h2>
        </div>
        
        <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6">
          {[
            "You won't be able to make any changes",
            "Your answers will be finalized immediately",
            "You'll see your results if immediate grading is enabled"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#FCFCFC]"></div>
              <p className="font-['Ubuntu_Sans'] text-base md:text-lg text-[#FCFCFC]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Options Section */}
      <section className="w-full rounded-lg border border-[#313130]">
        <div className="p-4 md:p-6 border-b border-[#313130]">
          <h2 className="font-['Ubuntu_Sans'] font-semibold text-lg md:text-xl text-[#FCFCFC]">
            If you still have time left, you can continue answering.
          </h2>
        </div>
        
        <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6">
          {[
            "Click \"Yes, Submit Exam\" to finalize.",
            "Click \"Cancel\" to go back."
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#FCFCFC]"></div>
              <p className="font-['Ubuntu_Sans'] text-base md:text-lg text-[#FCFCFC]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full max-w-[294px] mx-auto mt-8 md:mt-12 flex gap-4 md:gap-[24px]">
        <button 
          className="flex-1 h-[43px] border border-[#ABABAB] rounded-lg font-['Ubuntu_Sans'] text-base text-[#ABABAB] hover:bg-green-800 transition-colors"
          onClick={onCancel}>
          Cancel
        </button>
        <button 
          className="flex-1 h-[43px] border border-[#ABABAB] rounded-lg font-['Ubuntu_Sans'] text-base text-[#ABABAB] hover:bg-gray-800 transition-colors"
          onClick={onSubmit}>
          Yes, Submit Exam
        </button>
      </div>
    </div>
  );
}