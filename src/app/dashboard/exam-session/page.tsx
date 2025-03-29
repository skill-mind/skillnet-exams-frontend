export default function ExamSessionPage() {
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
        </div>
      </header>
      
      {/* Main Content */}
      <div className="w-full max-w-[1240px] mx-auto mt-4 md:mt-8 flex flex-col gap-4 md:gap-[24px] p-4 md:p-[24px] bg-[#101110]">
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

        {/* Timer/Controls Section */}
        <div className="w-full rounded-[8px] border border-[#313130]">
          <div className="w-full h-[60px] md:h-[91px] flex flex-col sm:flex-row justify-between items-center p-4 md:p-[24px] border-b border-[#313130] gap-2">
            <div className="font-['Ubuntu_Sans'] font-bold text-[16px] md:text-[20px] leading-[100%] text-white py-[2px] px-[5px] rounded-[4px]">
              60:00 Mins
            </div>

            <div className="font-['Ubuntu_Sans'] font-bold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-white whitespace-nowrap py-[2px] px-[5px] rounded-[4px]">
              Timer: 00:23
            </div>

            <div className="flex gap-2 md:gap-[24px]">
              <button className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] bg-[#D0EFB1]">
                <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#0E0F0E]">
                  Preview
                </span>
              </button>

              <button className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] bg-[#C78989]">
                <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#0E0F0E]">
                  End exam
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="w-full rounded-[8px] border border-[#313130]">
          <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
            <div className="font-['Ubuntu_Sans'] font-semibold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Instructions
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 p-4 md:p-[24px]">
            <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Read the question carefully before selecting your answer.
            </div>
            
            <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Select the most correct option.
            </div>
          </div>
        </div>

        {/* Question Section */}
        <div className="w-full rounded-[8px] border border-[#313130]">
          <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
            <div className="font-['Ubuntu_Sans'] font-semibold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Questions 1/25
            </div>
          </div>

          <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
            <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Which of the following best describes how a smart contract operates on a blockchain?
            </div>
          </div>
        </div>

        {/* Options Section */}
        <div className="w-full rounded-[8px] border border-[#313130] flex flex-col">
          <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
            <div className="font-['Ubuntu_Sans'] font-semibold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
              Options
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between p-4 md:p-[24px] gap-4">
            <div className="w-full md:w-auto flex flex-col gap-4 md:gap-[24px]">
              {['A', 'B', 'C', 'D'].map((option) => {
                const isOptionB = option === 'B';
                return (
                  <div key={option} className="w-full flex justify-between items-center gap-4">
                    <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC] min-w-[24px]">
                      {option}.
                    </div>
                    <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC] flex-grow">
                      Option {option === 'A' ? 1 : option === 'B' ? 2 : option === 'C' ? 3 : 4}
                    </div>
                    <div className={`w-6 h-6 flex items-center justify-center border rounded-[4px] flex-shrink-0 ${
                      isOptionB ? 'border-[#4ADE80] bg-[#4ADE80]' : 'border-[#ABABAB]'
                    }`}>
                      {isOptionB && (
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full md:w-auto flex flex-col justify-end">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-[24px] justify-end">
                <button className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] border border-[#ABABAB] cursor-pointer">
                  <span className="font-['Ubuntu_Sans'] text-[#ABABAB] text-[16px] md:text-[20px] leading-[100%]">←</span>
                  <span className="font-['Ubuntu_Sans'] text-[#ABABAB] text-[14px] md:text-[16px]">Previous</span>
                </button>

                <button className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] border border-[#ABABAB] cursor-pointer">
                  <span className="font-['Ubuntu_Sans'] text-[#ABABAB] text-[14px] md:text-[16px]">Next</span>
                  <span className="font-['Ubuntu_Sans'] text-[#ABABAB] text-[16px] md:text-[20px] leading-[100%]">→</span>
                </button>
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