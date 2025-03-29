"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"

// Define the props interface for type safety
interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  examData: {
    title: string
    institution?: string
    category?: string
    status?: string
    score?: string
    date?: string
    passingScore?: number | string
    certification?: string
  } | null
}

const ResultModal = ({ isOpen, onClose, examData }: ResultModalProps) => {
  // Close modal when Escape key is pressed
  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      onClose()
    }
  }, [isOpen, onClose])

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey)
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, handleEscKey])

  if (!isOpen || !examData) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-[#121212] text-white w-full max-h-[90vh] overflow-y-auto md:min-w-[60%] md:max-w-[75%] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 z-10 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content Container */}
        <div className="mt-4 md:mt-6">
          {/* Exam Info Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-10">
            {/* Exam Image */}
            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px] mx-auto sm:mx-0 ">
              <Image
                src="/images/head.png"
                alt="Exam Certificate"
                width={140}
                height={140}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Exam Details */}
            <div className="flex flex-col justify-center text-center sm:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-1">{examData.title}</h2>
              <p className="text-gray-400 mb-1">{examData.institution || "Name of Institution"}</p>
              <p className="text-sm text-[#6E6E6E] mb-3 md:mb-4">{examData.category || "Category not available"}</p>

              <div className="space-y-1 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[#6E6E6E] sm:w-28">STATUS:</span>
                  <span className={`${examData.status === "Pass" ? "text-green-400" : "text-red-400"}`}>
                    {examData.status || "Completed"}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[#6E6E6E] sm:w-28">PASS SCORE:</span>
                  <span>{examData.passingScore || "70%"}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[#6E6E6E] sm:w-28">TIMESTAMP:</span>
                  <span>{examData.date || "29th Feb, 2025"}</span>
                </div>
                {examData.certification && (
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="text-[#6E6E6E] sm:w-28">CERTIFICATION:</span>
                    <span>{examData.certification}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <button className="border border-gray-700 rounded py-3 md:py-4 text-center hover:bg-gray-800 transition">
              SHARE
            </button>
            <button className="border border-gray-700 rounded py-3 md:py-4 text-center hover:bg-gray-800 transition">
              PRINT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultModal