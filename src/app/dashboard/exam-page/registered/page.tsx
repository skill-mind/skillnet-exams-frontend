"use client";

import { Chatbot } from "@/components/chatbot";
import DynamicHeader from "@/components/dashboard/exam/components/dynamic-header";
import ExamsRegisteredComponent from "@/components/exams-registered/ExamsRegistered";
import Image from "next/image";
import { Suspense, useState } from "react";
import RobotChatImage from "../../../../../public/chat-bot.svg";

export default function RegisteredPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col">
        <DynamicHeader />
        <button
          onClick={() => setIsChatOpen(true)}
          className="self-end pt-14 text-[#ABABAB] flex gap-2"
        >
          <p>Chatbox</p>
          <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
          <Image
            alt="robot-chat-image"
            width={20}
            height={20}
            src={RobotChatImage}
          />
        </button>
        <ExamsRegisteredComponent />
      </div>
    </Suspense>
  );
}
