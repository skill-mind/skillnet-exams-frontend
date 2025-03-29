export default function EndExamPage() {
  return (
    <div className="min-h-screen bg-[#101110] p-4 sm:p-6 md:p-8">
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

      <main className="w-full max-w-[1240px] mx-auto mt-8 md:mt-[190px] flex flex-col gap-6">
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
      </main>

      <div className="w-full max-w-[294px] mx-auto mt-8 md:mt-12 flex gap-4 md:gap-[24px]">
        <button className="flex-1 h-[43px] border border-[#ABABAB] rounded-lg font-['Ubuntu_Sans'] text-base text-[#ABABAB] hover:bg-green-800 transition-colors">
          Cancel
        </button>
        <button className="flex-1 h-[43px] border border-[#ABABAB] rounded-lg font-['Ubuntu_Sans'] text-base text-[#ABABAB] hover:bg-gray-800 transition-colors">
          Yes, Submit Exam
        </button>
      </div>
    </div>
  );
}