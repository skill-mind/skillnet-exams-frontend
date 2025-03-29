import DynamicHeader from "@/components/dashboard/exam/components/dynamic-header";
import ExamsRegisteredComponent from "@/components/exams-registered/ExamsRegistered";
import Image from "next/image";
import { Suspense } from "react";
import RobotChatImage from "../../../../../public/chat-bot.svg"

export default function RegisteredPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col">
        <DynamicHeader />
        <div className="self-end pt-14 text-[#ABABAB] flex gap-2">
          <p>Chatbox</p>
          <Image alt="robot-chat-image" width={20} height={20} src={RobotChatImage} />
        </div>
        <ExamsRegisteredComponent />
      </div>
    </Suspense>
  );
}
