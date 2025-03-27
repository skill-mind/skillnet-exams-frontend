"use client";

import { useState, useEffect } from "react";
import { MoreVerticalIcon } from "lucide-react";
import * as Tabs from "@radix-ui/react-tabs";
import QuestionChat, { type QuestionType } from "./question-chat";

// Simple utility for class names with proper typing
const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

// Sample data for questions
const questions: QuestionType[] = [
  {
    id: 1,
    user: {
      name: "Josh",
      avatar: "/placeholder.svg?height=40&width=40",
      color: "#8b5cf6", // Purple color
    },
    question:
      "What videos and materials can you recommend for a beginner started web design",
    time: "Today",
    messages: [
      {
        id: 1,
        content:
          "What videos and materials can you recommend for a beginner started web design",
        timestamp: "10:54 AM",
        sender: "user",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Josh",
      avatar: "/placeholder.svg?height=40&width=40",
      color: "#8b5cf6", // Purple color
    },
    question: "You could start with introduction to design by Flora Design?",
    time: "Today",
    messages: [
      {
        id: 1,
        content: "You could start with introduction to design by Flora Design?",
        timestamp: "10:41 AM",
        sender: "user",
      },
    ],
  },
];

const QuestionsTab = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Get the selected question
  const selectedQuestion = selectedQuestionId
    ? questions.find((q) => q.id === selectedQuestionId)
    : null;

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-[#333] pb-3">
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex gap-4">
            <Tabs.Trigger
              value="new"
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "new"
                  ? "text-white border border-white rounded-md"
                  : "text-gray-400 border border-gray-400 rounded-md"
              }`}
            >
              New
            </Tabs.Trigger>
            <Tabs.Trigger
              value="archived"
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "archived"
                  ? "text-white border border-white rounded-md"
                  : "text-gray-400 border border-gray-400 rounded-md"
              }`}
            >
              Archived
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Questions list - Hide on mobile when a question is selected */}
        <div
          className={cn(
            "w-full md:w-1/3 border-r border-[#333] overflow-y-auto",
            isMobile && selectedQuestionId ? "hidden" : "block"
          )}
        >
          {questions.map((question) => (
            <div
              key={question.id}
              className={`flex items-start p-3 cursor-pointer hover:bg-[#252525] ${
                selectedQuestionId === question.id ? "bg-[#252525]" : ""
              }`}
              onClick={() => setSelectedQuestionId(question.id)}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3"
                style={{ backgroundColor: question.user.color }}
              >
                {question.user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {question.user.name}
                  </span>
                  <span className="text-xs text-gray-400">{question.time}</span>
                </div>
                <p className="text-sm text-gray-300 truncate mt-1">
                  {question.question}
                </p>
              </div>
              <button className="ml-2 text-gray-400 hover:text-white">
                <MoreVerticalIcon size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Chat area - Show on mobile only when a question is selected */}
        <div
          className={cn(
            "flex-1 flex flex-col",
            isMobile && !selectedQuestionId ? "hidden" : "flex"
          )}
        >
          {selectedQuestion ? (
            <QuestionChat
              question={selectedQuestion}
              onBack={() => setSelectedQuestionId(null)}
              isMobile={isMobile}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <p className="text-lg font-medium mb-2">No Question Selected</p>
              <p className="text-sm text-gray-400">
                Select a question from the list to view the conversation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsTab;
