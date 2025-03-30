"use client";

import React from 'react';

interface PreviewComponentProps {
  questions: Array<{ id: number; selectedOption: string | null }>;
  onBack: () => void;
  onSubmit: () => void;
}

export default function PreviewComponent({ questions, onBack, onSubmit }: PreviewComponentProps) {
  return (
    <div className="w-full rounded-[8px] border border-[#313130]">
      <div className="w-full h-[60px] md:h-[72px] gap-[10px] p-4 md:p-[24px] border-b border-[#313130] flex items-center">
        <div className="font-['Ubuntu_Sans'] font-semibold text-[18px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
          Preview
        </div>
      </div>
      
      {/* Questions Grid */}
      <div className="w-full p-4 md:p-[24px]">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {questions.map((question) => {
            const isChecked = question.selectedOption !== null;
            return (
              <div key={question.id} className="flex justify-between items-center">
                <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
                  Q{question.id}.
                </div>
                <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
                  {isChecked ? `Option ${question.selectedOption}` : 'Not answered'}
                </div>
                <div className={`w-6 h-6 border rounded-[4px] flex items-center justify-center 
                  ${isChecked ? 'border-[#4ADE80] bg-[#4ADE80]' : 'border-[#ABABAB]'}`}>
                  {isChecked && (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Controls */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-[10px] py-2 px-4 rounded-[8px] border border-[#ABABAB]">
              <div className="w-6 h-6 flex items-center justify-center border border-[#4ADE80] rounded-[4px]">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>                    
              <div className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#ABABAB]">
                Answered
              </div>
            </div>                  
            <div className="flex items-center gap-[10px] py-2 px-4 rounded-[8px] border border-[#ABABAB]">
              <div className="w-6 h-6 border border-[#ABABAB] rounded-[4px]"></div>
              <div className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#ABABAB]">
                Not answered
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              className="flex items-center justify-center gap-[10px] py-2 px-4 rounded-[8px] border border-[#ABABAB] cursor-pointer hover:bg-gray-100 hover:bg-opacity-10 transition-colors"
              onClick={onBack}>
              <span className="text-[20px] text-[#ABABAB]">←</span>
              <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] text-[#ABABAB]">
                Go Back
              </span>
            </button>
            
            <button 
              className="flex items-center justify-center gap-[10px] py-2 px-4 rounded-[8px] border border-[#ABABAB] cursor-pointer hover:bg-gray-100 hover:bg-opacity-10 transition-colors"
              onClick={onSubmit}>
              <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] text-[#ABABAB]">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}