"use client";
import { Chatbot } from "@/components/chatbot";
import { useEffect, useState } from "react";
import EndExamComponent from "../../../components/dashboard/exam-session/EndExamComponent";
import EndExamPrompt from "../../../components/dashboard/exam-session/EndExamPrompt";
import PreviewComponent from "../../../components/dashboard/exam-session/PreviewComponent";
import { useTheme } from "@/useContext/ThemeContext";

type ExamState = "exam" | "preview" | "end-exam" | "exam-completed";

export default function ExamSessionPage() {
  const [currentState, setCurrentState] = useState<ExamState>("exam");
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [score, setScore] = useState<number | null>(null);

  const [questions, setQuestions] = useState(
    Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      selectedOption: null as string | null,
    }))
  );

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 25;

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, selectedOption: option } : q
      )
    );
  };

  const handleTimeExpired = () => {
    // Calculate score when time expires
    const calculatedScore = Math.floor(Math.random() * 40) + 60; // Random score between 60-100 for demo
    setScore(calculatedScore);
    setCurrentState("exam-completed");
  };

  const handleSubmitExam = () => {
    // Calculate score when submitted
    const calculatedScore = Math.floor(Math.random() * 40) + 60; // Random score between 60-100 for demo
    setScore(calculatedScore);
    setCurrentState("exam-completed");
  };

  const renderExamContent = () => {
    switch (currentState) {
      case "preview":
        return (
          <PreviewComponent
            questions={questions}
            onBack={() => setCurrentState("exam")}
            onSubmit={handleSubmitExam}
          />
        );
      case "end-exam":
        return (
          <EndExamComponent
            onCancel={() => setCurrentState("exam")}
            onSubmit={handleSubmitExam}
          />
        );
      case "exam-completed":
        return (
          score !== null && (
            <EndExamPrompt
              score={score}
              onFinish={() => setCurrentState("exam")} // Or route to another page
            />
          )
        );
      default:
        return (
          <>
            {/* Question Section */}
            <div className="w-full rounded-[8px] border border-[#313130]">
              <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
                <div className="font-['Ubuntu_Sans'] font-semibold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
                  Questions {currentQuestion}/{totalQuestions}
                </div>
              </div>

              <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
                <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
                  Which of the following best describes how a smart contract
                  operates on a blockchain?
                </div>
              </div>
            </div>

            {/* Options Section */}
            <div className="w-full rounded-[8px] border border-[#313130] flex flex-col">
              <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
                <div className="font-['Ubuntu_Sans'] font-semibold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
                  Options
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-between p-4 md:p-[24px] gap-4">
                <div className="w-full md:w-auto flex flex-col gap-4 md:gap-[24px]">
                  {["A", "B", "C", "D"].map((option) => {
                    const isSelected =
                      questions[currentQuestion - 1]?.selectedOption === option;
                    return (
                      <div
                        key={option}
                        className="w-full flex justify-between items-center gap-4 cursor-pointer"
                        onClick={() =>
                          handleOptionSelect(currentQuestion, option)
                        }
                      >
                        <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC] min-w-[24px]">
                          {option}.
                        </div>
                        <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC] flex-grow">
                          Option{" "}
                          {option === "A"
                            ? 1
                            : option === "B"
                            ? 2
                            : option === "C"
                            ? 3
                            : 4}
                        </div>
                        <div
                          className={`w-6 h-6 flex items-center justify-center border rounded-[4px] flex-shrink-0 ${
                            isSelected
                              ? "border-[#4ADE80] bg-[#4ADE80]"
                              : "border-[#ABABAB]"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M16.6666 5L7.49992 14.1667L3.33325 10"
                                stroke="#FCFCFC"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="w-full md:w-auto flex flex-col justify-end">
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-[24px] justify-end">
                    <button
                      className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] border border-[#ABABAB] cursor-pointer"
                      disabled={currentQuestion === 1}
                      onClick={() =>
                        setCurrentQuestion((prev) => Math.max(1, prev - 1))
                      }
                    >
                      <span className="font-['Ubuntu_Sans'] text-black dark:text-[#ABABAB] text-[16px] md:text-[20px] leading-[100%]">
                        ←
                      </span>
                      <span className="font-['Ubuntu_Sans'] text-black dark:text-[#ABABAB] text-[14px] md:text-[16px]">
                        Previous
                      </span>
                    </button>

                    <button
                      className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] border border-[#ABABAB] cursor-pointer"
                      disabled={currentQuestion === totalQuestions}
                      onClick={() =>
                        setCurrentQuestion((prev) =>
                          Math.min(totalQuestions, prev + 1)
                        )
                      }
                    >
                      <span className="font-['Ubuntu_Sans'] text-black dark:text-[#ABABAB] text-[14px] md:text-[16px]">
                        Next
                      </span>
                      <span className="font-['Ubuntu_Sans'] text-black dark:text-[#ABABAB] text-[16px] md:text-[20px] leading-[100%]">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  // If exam is completed, show only the prompt (it's full-screen)
  if (currentState === "exam-completed") {
    return score !== null ? (
      <EndExamPrompt score={score} onFinish={() => setCurrentState("exam")} />
    ) : null;
  }
  const { isDarkMode, toggleTheme } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white dark:bg-[#101110]  p-4 sm:p-6 md:p-8">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto">
        <div className="w-full flex justify-between items-center p-4 md:px-[100px]  bg-white dark:bg-[#101110] ">
          <div className="flex items-center gap-4 md:gap-[252px] p-4 md:px-[80px] rounded-lg md:rounded-[8px] backdrop-blur-md md:backdrop-blur-[24px] bg-gray-200 dark:bg-[rgba(16,17,16,0.8)]">
            <img
              src={`/BLACK HORIZONTAL LOGO.svg`}
              className="w-[80px] md:w-[100px] h-[32px] md:h-[40px]"
              alt="black-logo"
            />
            <div className="flex items-center justify-center gap-[16px]">
              <div className="font-['Ubuntu_Sans'] font-normal text-[12px] md:text-[14px] leading-[24px] tracking-[0%] capitalize text-black dark:text-[#FCFCFC] whitespace-nowrap">
                Candidate Name
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1240px] mx-auto mt-4 md:mt-8 flex flex-col gap-4 md:gap-[24px] p-4 md:p-[24px] bg-white dark:bg-[#101110]">
        {/* Chatbox Header */}
        <div className="w-full border border-[#313130] p-2 md:p-4">
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-full flex justify-end items-center gap-2"
          >
            <div className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-right capitalize text-[#101110] bg-[#ABABAB] rounded-[4px] px-2 py-1">
              Chatbox
              <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
            </div>
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src="/svg/chat-bot.svg"
                className="w-4 h-4"
                alt="Chat icon"
              />
            </div>
          </button>
        </div>

        {/* Timer/Controls Section */}
        <div className="w-full rounded-[8px] border border-[#313130]">
          <div className="w-full h-[60px] md:h-[91px] flex flex-col sm:flex-row justify-between items-center p-4 md:p-[24px] border-b border-[#313130] gap-2">
            <div className="font-['Ubuntu_Sans'] font-bold text-[16px] md:text-[20px] leading-[100%] text-black dark:text-white py-[2px] px-[5px] rounded-[4px]">
              60:00 Mins
            </div>

            <div className="font-['Ubuntu_Sans'] font-bold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-white whitespace-nowrap py-[2px] px-[5px] rounded-[4px]">
              Timer: {formatTime(timeLeft)}
            </div>

            <div className="flex gap-2 md:gap-[24px]">
              <button
                className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] bg-[#D0EFB1]"
                onClick={() => setCurrentState("preview")}
              >
                <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#0E0F0E]">
                  Preview
                </span>
              </button>

              <button
                className="h-[36px] md:h-[43px] flex items-center justify-center gap-[10px] py-2 px-4 md:py-[12px] md:px-[24px] rounded-[8px] bg-[#C78989]"
                onClick={() => setCurrentState("end-exam")}
              >
                <span className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#0E0F0E]">
                  End exam
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Area */}
        {renderExamContent()}

        {/* Instructions Section */}
        <div className="w-full rounded-[8px] border border-[#313130]">
          <div className="w-full h-[60px] md:h-[72px] flex items-center gap-[10px] p-4 md:p-[24px] border-b border-[#313130]">
            <div className="font-['Ubuntu_Sans'] font-semibold text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
              Instructions
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 p-4 md:p-[24px]">
            <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
              Read the question carefully before selecting your answer.
            </div>

            <div className="font-['Ubuntu_Sans'] font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
              Select the most correct option.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full rounded-[8px] border border-[#313130] bg-white dark:bg-[#101110]  p-4 md:p-[24px]">
          <div className="w-full flex justify-end">
            <div className="font-['Ubuntu_Sans'] font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-black dark:text-[#FCFCFC]">
              Powered by SkillNet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
