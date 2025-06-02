"use client"
import React from "react";
import { AlertTriangle, Camera, Laptop, Mic, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";


export default function MobileNotAllowedPage() {
  const router = useRouter();

  if (!isMobile) {
    router.push("/dashboard");
  }
  return (
    <main className="flex-1 px-6 py-10 space-y-6 container mx-auto max-w-3xl">
      <html></html>
      <div className="rounded-md shadow-sm">
        <div className="rounded-md font-semibold text-[#060812] border border-[#C3C3C3] p-6 text-xl flex items-center justify-center gap-3 bg-gray-50">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          <p>You are not allowed to take this exam on a mobile device.</p>
        </div>
      </div>

      <div className="rounded-md border border-[#C3C3C3] shadow-sm overflow-hidden bg-white">
        <p className="font-semibold text-[#060812] border-b border-[#C3C3C3] p-6 text-xl bg-gray-50">
          To proceed, please use a desktop or laptop:
        </p>

        <ul className="py-6 px-6 flex flex-col gap-5 text-[#060812]">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-gray-100 p-2 rounded-full">
              <Camera className="h-5 w-5 text-[#060812]" />
            </div>
            <div className="flex-1">
              <p className="font-medium">
                Ensure your device has a webcam and microphone.
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <Mic className="h-4 w-4" />
                <span>Both are required for exam proctoring</span>
              </div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-gray-100 p-2 rounded-full">
              <Laptop className="h-5 w-5 text-[#060812]" />
            </div>
            <div className="flex-1">
              <p className="font-medium">
                Return to this page on a supported device to start the exam.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Desktop and laptop computers are fully supported
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-gray-100 p-2 rounded-full">
              <HelpCircle className="h-5 w-5 text-[#060812]" />
            </div>
            <div className="flex-1">
              <p className="font-medium">
                Contact support if you need further assistance.
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-800 mt-1 flex items-center gap-1">
                Get help with your exam
              </button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
