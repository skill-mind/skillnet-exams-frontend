"use client"

import { useState, Suspense } from "react"
import { exams } from "@/lib/exam-mock-data"
import { Bot } from "lucide-react"
import DynamicHeader from "@/components/dashboard/exam/components/dynamic-header"
import ResultModal from "@/components/dashboard/exam/components/modals/view-result"

export default function ResultsPage() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedExam, setSelectedExam] = useState<any>(null)

  const handleViewResults = (exam: any) => {
    setSelectedExam(exam)
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col w-full">
        <DynamicHeader />
        
        {/* Ensure full width and prevent max-width restrictions */}
        <div className="w-full flex flex-1 flex-col py-12">
          <div className="w-full flex justify-end items-center">
            <p>Chatbox</p>
            <Bot className="h-4 pr-1" />
          </div>

          {/* Grid container for Exam Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full">
            {exams.slice(0, 4).map((exam, index) => {
              const status = index % 2 === 0 ? "Pass" : "Failed"

              return (
                <div key={exam.id} className="w-full">
                  <div className="rounded-lg bg-[#161716] flex flex-col h-[500px] w-full">
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[16px] font-bold">{exam.title}</h2>
                        <span
                          className={`px-3 py-1 ${
                            status === "Pass" ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"
                          } text-xs rounded`}
                        >
                          {status}
                        </span>
                      </div>
                      
                  
                      
                      <div className="flex-1 flex flex-col w-full">
                        <p className="text-[12px] text-white">{exam.description}</p>

                        

                        <div className="space-y-2 mt-auto text-[12px] ">
                        <hr className=" mt-auto lg:mb-6" style={{ width: "100%", border: "1px solid #252625" }} />
                          <div className="flex gap-2">
                            <span className="text-[#6E6E6E]">DATE:</span>
                            <span>{exam.date}</span>
                          </div>

                          <div className="flex gap-2">
                            <span className="text-[#6E6E6E]">DURATION:</span>
                            <span>{exam.duration}</span>
                          </div>

                          <div className="flex gap-2">
                            <span className="text-[#6E6E6E]">REGISTERED CANDIDATES:</span>
                            <span>{exam.registeredCandidates}</span>
                          </div>

                          <div className="flex gap-2">
                            <span className="text-[#6E6E6E]">CERTIFICATION:</span>
                            <span>{exam.certification}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-[#6E6E6E]">PASSING SCORE:</span>
                            <span>{exam.passingScore}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-[#6E6E6E] ">FORMAT:</span>
                            <span>{exam.format}</span>
                          </div>
                        </div>
                        <hr className="mt-6" style={{ width: "100%", border: "1px solid #252625" }} />
                      </div>

                      

                     
                    </div>

                    <div className="p-4 mt-auto">
                      <button
                        className="w-full text-[16px] py-2 px-4 border border-[#D0EFB1] rounded-md bg-transparent text-white hover:bg-gray-800 transition-colors"
                        onClick={() => handleViewResults({ ...exam, status })}
                      >
                        VIEW RESULTS
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Modal for Viewing Exam Results */}
        <ResultModal isOpen={openModal} onClose={closeModal} examData={selectedExam} />
      </div>
    </Suspense>
  )
}
