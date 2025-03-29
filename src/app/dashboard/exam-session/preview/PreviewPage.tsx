import React from 'react';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#101110] p-4 sm:p-6 md:p-8">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto">
        <div className="w-full flex justify-between items-center p-4 md:px-[100px] bg-[#101110]">
          <div className="flex items-center gap-4 md:gap-[252px] p-4 md:px-[80px] rounded-lg md:rounded-[8px] backdrop-blur-md md:backdrop-blur-[24px] bg-[rgba(16,17,16,0.8)]">
            <img 
              src="/BLACK HORIZONTAL LOGO.svg" 
              className="w-[80px] md:w-[100px] h-[32px] md:h-[40px]" 
              alt="black-logo"
            />
            <div className="flex items-center justify-center gap-[16px]">
              <div className="font-['Ubuntu_Sans'] font-normal text-[12px] md:text-[14px] leading-[24px] tracking-[0%] capitalize text-[#FCFCFC] whitespace-nowrap">
                Candidate Name
              </div>
            </div>
          </div>
          <div className="w-[617px] h-[48px] gap-[18px]"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1240px] mx-auto mt-8 flex flex-col gap-4 md:gap-[24px] p-4 md:p-[24px] bg-[#101110]">
        {/* Chatbox Header */}
        <div className="w-full border border-[#313130] p-2 md:p-4">
          <div className="w-full flex justify-end items-center gap-2">
            <div className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-right capitalize text-[#101110] bg-[#ABABAB] rounded-[4px] px-2 py-1">
              Chatbox
            </div>
            <div className="w-5 h-5 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ABABAB"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full rounded-[8px] border border-[#313130]">
          <div className="w-full h-[60px] md:h-[72px] gap-[10px] p-4 md:p-[24px] border-b border-[#313130] flex items-center">
            <div className="font-['Ubuntu_Sans'] font-semibold text-[18px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Preview
            </div>
          </div>
          
          {/* Questions Grid */}
          <div className="w-full p-4 md:p-[24px]">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {Array.from({ length: 25 }).map((_, index) => {
                const isChecked = Math.random() < 0.3;
                return (
                  <div key={index} className="flex justify-between items-center">
                    <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
                      Q{index + 1}.
                    </div>
                    <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
                      Option {Math.floor(index/5) + 1}
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
                <div className="flex items-center justify-center gap-[10px] py-2 px-4 rounded-[8px] border border-[#ABABAB] cursor-pointer hover:bg-gray-100 hover:bg-opacity-10 transition-colors">
                  <span className="text-[20px] text-[#ABABAB]">←</span>
                  <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] text-[#ABABAB]">
                    Go Back
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-[10px] py-2 px-4 rounded-[8px] border border-[#ABABAB] cursor-pointer hover:bg-gray-100 hover:bg-opacity-10 transition-colors">
                  <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] text-[#ABABAB]">
                    Submit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full rounded-[8px] border border-[#313130] bg-[#101110] p-4 md:p-[24px]">
          <div className="w-full flex justify-end">
            <div className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Powered by SkillNet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}