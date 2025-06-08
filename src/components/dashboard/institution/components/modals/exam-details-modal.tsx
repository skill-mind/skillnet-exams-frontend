"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

interface ExamType {
  id: number
  title: string
  description: string
  duration: string
  level: string
  language: string
  certification: boolean
}

interface ExamDetailsModalProps {
  exam: ExamType
  onClose: () => void
}

export default function ExamDetailsModal({ exam, onClose }: ExamDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        ref={modalRef}
        className="relative flex flex-col md:flex-row w-full max-w-4xl bg-[#0a1128] text-white rounded-lg overflow-hidden"
      >
        {/* Left sidebar */}
        <div className="w-full md:w-[250px] bg-[#00031B] p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{exam.title}</h2>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2 bg-[#182c5b] rounded-full px-4 py-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span>{exam.duration}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-[#182c5b] rounded-full px-4 py-1 text-xs">{exam.level}</span>
              <span className="bg-[#182c5b] rounded-full px-4 py-1 text-xs">{exam.language}</span>
              {exam.certification && <span className="bg-[#182c5b] rounded-full px-4 py-1 text-xs">Certification</span>}
            </div>
          </div>
        </div>

        {/* Main content - with margin from edges */}
        <div className="flex-1 bg-[#00031B] p-6">
          <div className="h-full flex flex-col bg-[#0B1739] rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-4">Date: <span className=" text-white"> April 27th, 2025</span></p>
                <h3 className="text-2xl font-bold">About Exam</h3>
              </div>

              <Link href="/dashboard/institution/created-exam">
                <Button
                  variant="outline"
                  className="bg-transparent border border-gray-600 hover:bg-gray-700 rounded-full px-4 py-2 text-sm"
                >
                  Close
                </Button>
              </Link>
            </div>

            <div className="mb-8">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                The {exam.title} Programming Test Evaluates Candidates' Ability To Develop Smart Contracts Using The
                Solidity Language On The Ethereum Virtual Machine (EVM). This Test Assesses A Candidate's Understanding
                Of Core Solidity Concepts Such As State Variables, Functions, Data Structures, Modifiers, And Events. It
                Also Evaluates Their Ability To Write Secure, Gas-Efficient, And Maintainable Code, Ensuring They Can
                Build And Interact With Decentralized Applications (DApps) In A Web3 Environment.
              </p>
            </div>

            <div className="mt-auto">
              <h4 className="text-xl font-semibold mb-4">Covered Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Variables", "Data Structures", "Events", "Functions", "Modifiers"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
