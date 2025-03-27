"use client";

import { useState, useRef, useEffect } from "react";
import {
  SendIcon,
  SmileIcon,
  PaperclipIcon,
  ArrowLeftIcon,
} from "lucide-react";

// Define types for our components
export interface MessageType {
  id: number;
  content: string;
  timestamp: string;
  sender: string;
}

export interface UserType {
  name: string;
  avatar: string;
  color: string;
}

export interface QuestionType {
  id: number;
  user: UserType;
  question: string;
  time: string;
  messages: MessageType[];
}

interface QuestionChatProps {
  question: QuestionType;
  onBack: () => void;
  isMobile: boolean;
}

const QuestionChat = ({ question, onBack, isMobile }: QuestionChatProps) => {
  const [messages, setMessages] = useState<MessageType[]>(
    question.messages || []
  );
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const now = new Date();
    const timestamp = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      id: Date.now(),
      content: inputMessage,
      timestamp,
      sender: "instructor",
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  return (
    <>
      {/* Chat header */}
      <div className="flex items-center p-3 border-b border-[#333]">
        {isMobile && (
          <button
            onClick={onBack}
            className="mr-2 p-1.5 rounded-lg text-gray-400 hover:text-white"
          >
            <ArrowLeftIcon size={18} />
          </button>
        )}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium mr-2"
          style={{ backgroundColor: question.user.color }}
        >
          {question.user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{question.user.name}</span>
            <span className="text-xs text-gray-400">{question.time}</span>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div
        ref={chatContainerRef}
        className="flex flex-col h-[400px] p-4 overflow-y-auto "
      >
        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${
                message.sender === "user" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-3 ${
                  message.sender === "user"
                    ? "bg-[#252525] text-white"
                    : "bg-[#8b5cf6] text-white"
                }`}
              >
                <p className="text-sm break-words">{message.content}</p>
                <div className="flex justify-end mt-1">
                  <span
                    className={`text-xs ${
                      message.sender === "user"
                        ? "text-gray-300"
                        : "text-gray-200"
                    }`}
                  >
                    {message.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat input */}
      <div className="p-3 border-t border-[#333]">
        <div className="flex items-center bg-[#252525] rounded-full p-1">
          <button className="p-2 text-gray-400 hover:text-white">
            <SmileIcon size={18} />
          </button>
          <button className="p-2 text-gray-400 hover:text-white">
            <PaperclipIcon size={18} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 h-10"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className={`p-2 rounded-full ${
              inputMessage.trim() ? "text-white bg-green-500" : "text-gray-400"
            }`}
          >
            <SendIcon size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionChat;
