import { ArrowLeft, EllipsisVertical, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

type Props = {
  id?: string;
  status?: string;
  userChatColour?: string;
  userFontColor?: string;
};

export function Chatbot({
  id,
  status = "READY",
  userChatColour,
  userFontColor,
}: Props) {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "user",
      content:
        "Gm Gm, Satoshi. I have been following your teachings and it’s been really helpful to me. I do have a thing to suggest regarding one of your programs",
    },
    {
      role: "bot",
      content:
        "Oh that’s awesome. I’m glad my resources have been helpful and I’m open to helpful suggestions.",
    },
  ]);

  const [messageInput, setMessageInput] = useState("");
  const [chatting, setChatting] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = () => {
    if (!messageInput.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { role: "user", content: messageInput },
      {
        role: "bot",
        content: "Thank you for your message. I'll get back to you shortly!",
      },
    ]);
    setMessageInput("");
  };

  const markdownToHtml = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  return (
    <div className="border w-[98%] lg:w-[50%] rounded-[12px] h-[80%] lg:h-[735px] border-[#252625] flex flex-col">
      <div className="w-full py-1 px-3 flex flex-col h-auto justify-between">
        <div className="flex border-b border-[#222220] p-4 w-full items-center justify-between gap-2">
          <div className="gap-2 flex  items-center">
            <Button className="text-[#ABABAB] font-medium text-base">
              <ArrowLeft className="text-[#ABABAB] text-base font-medium" />{" "}
              Back
            </Button>
            <Image
              width={20}
              height={20}
              className="hover:-rotate-90 cursor-pointer h-auto w-auto"
              src="/images/checker.svg"
              alt="Refresh"
            />
            <p className="text-[fcfcfc] text-lg font-semibold">
              Skillnet Chatbot
            </p>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Search className="text-[#ABABAB]" />
            <EllipsisVertical className="text-[#ABABAB]" />
          </div>
        </div>
      </div>
      <div
        ref={chatContainerRef}
        className="w-full scrollbar-hide justify-end  overflow-y-scroll h-[75%] flex flex-col gap-3 p-4"
      >
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`w-full flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              style={{
                background:
                  message.role === "user"
                    ? userChatColour || "#202120"
                    : "#161716",
                color:
                  message.role === "user" ? userFontColor || "#fff" : "#1E1E1E",
              }}
              className="max-w-[70%] border-none px-4 py-3 text-[#ABABAB] text-base font-normal rounded-tl-lg rounded-tr-lg rounded-bl-lg "
            >
              {message.role === "user" ? (
                message.content
              ) : (
                <div
                  className="text-[#ABABAB] text-base font-normal"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(message.content),
                  }}
                />
              )}
            </div>
          </div>
        ))}

        {chatting && (
          <div className="flex flex-col mt-2 items-start w-full">
            <div className="w-32 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
        )}
      </div>

      <div className="relative p-4 h-[17%] flex flex-col">
        <textarea
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message"
          className="text-neutral-700 font-normal  scrollbar-hide border-[#40403E] border bg-transparent h-auto max-h-full font-manrope w-full pr-12 lg:pr-16 pl-24 lg:pl-40 py-4 overflow-y-scroll flex rounded-lg placeholder:text-[#9C9C9C] text-sm"
        />
        <button
          disabled={chatting || status !== "READY"}
          onClick={sendMessage}
          className="absolute top-[35px] right-7 disabled:cursor-not-allowed"
        >
          <Image
            src="/images/send.svg"
            width={40}
            height={40}
            alt="Send"
            className={`lg:w-full w-[30px] h-[30px] lg:h-full ${
              chatting ? "animate-pulse" : ""
            }`}
          />
        </button>
        <button
          disabled={chatting || status !== "READY"}
          className=" absolute top-[35px] left-8 lg:left-10 disabled:cursor-not-allowed"
        >
          <Image
            src="/images/mic.svg"
            width={40}
            height={40}
            alt="Send"
            className={`lg:w-full w-[25px] h-[25px]  lg:h-full ${
              chatting ? "animate-pulse" : ""
            }`}
          />
        </button>
        <button
          disabled={chatting || status !== "READY"}
          className=" absolute top-[35px] left-16 lg:left-28 disabled:cursor-not-allowed"
        >
          <Image
            src="/images/smile.svg"
            width={40}
            height={40}
            alt="Send"
            className={`lg:w-full w-[25px] h-[25px]  lg:h-full ${
              chatting ? "animate-pulse" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
