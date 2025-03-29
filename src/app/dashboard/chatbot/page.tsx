"use client";

import { Chatbot } from "@/components/chatbot";

type Props = {};

function page({}: Props) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Chatbot />
    </div>
  );
}

export default page;
