export default function EndExamPrompt() {
  return (
    <div className="fixed inset-0 bg-[#101110] overflow-auto">
      <div className="relative w-full min-h-screen p-4 sm:p-6 md:p-8 flex flex-col">
        <header className="w-full max-w-7xl mx-auto">
          <div className="w-full flex justify-between items-center p-4 md:px-[100px] bg-[#101110]">
            <div className="flex items-center gap-[252px] p-4 md:px-[80px] rounded-lg md:rounded-[8px] backdrop-blur-md md:backdrop-blur-[24px] bg-[rgba(16,17,16,0.8)]">
              <img 
                src="/BLACK HORIZONTAL LOGO.svg" 
                className="w-[100px] h-[40px]" 
                alt="black-logo"
              />
              <div className="flex items-center justify-center gap-[16px]">
                <div className="font-['Ubuntu_Sans'] font-normal text-[14px] leading-[24px] tracking-[0%] capitalize text-[#FCFCFC] whitespace-nowrap">
                  Candidate Name
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow flex flex-col justify-center">
          <div className="w-full max-w-[1240px] mx-auto mt-0 md:mt-0 ml-0 md:ml-[100px] h-auto flex flex-col gap-6">
            <div className="w-full h-[72px] rounded-lg md:rounded-[8px] border border-[#313130]">
              <div className="w-full h-full flex items-center justify-center p-6 md:p-[24px] border-b border-[#313130]">
                <div className="w-[560px] text-center font-['Ubuntu_Sans'] text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
                  Thank you for taking Web3 Fundamentals Certification Exam
                </div>
              </div>
            </div>
            
            <div className="w-full h-[72px] rounded-lg md:rounded-[8px] border border-[#313130]">
              <div className="w-full h-full flex items-center justify-center gap-[10px] p-6 md:p-[24px] border-b border-[#313130]">
                <div className="w-[191px] text-center font-['Ubuntu_Sans'] text-[20px] leading-[100%] tracking-[0%] text-[#FCFCFC]">
                  Your score is: 70/100
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1240px] mx-auto mb-8 md:mb-12 mt-8">
          <div className="w-[96px] h-[43px] mx-auto flex gap-6 md:gap-[24px]">
            <button className="w-full h-full flex items-center justify-center gap-[10px] py-[12px] px-[24px] rounded-[8px] bg-[#2D2E2D] hover:bg-[#3E3F3E] transition-colors">
              <div className="w-[48px] font-['Ubuntu_Sans'] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#FCFCFC] text-center">
                FINISH
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}