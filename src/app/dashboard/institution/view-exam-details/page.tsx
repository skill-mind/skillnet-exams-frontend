"use client"
import { Suspense, useState } from "react"
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout"

import CandidateScoresTable from "./CandidateScoresTable"
import ExamHistoryTable from "./ExamHistoryTable"
import RecordingsView from "./RecordingsView"

export default function InstitutionDashboardPage() {
  const [activeTab, setActiveTab] = useState("candidates") 

  return (
    <InstitutionLayout title="Institution Dashboard" activePage="View-Exam-Details">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="md:p-6 min-h-screen mb-5">
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => setActiveTab("candidates")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === "candidates" 
                  ? "bg-[#0f1f4b68] text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Candidates Scores
            </button>
            <button 
              onClick={() => setActiveTab("history")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === "history" 
                  ? "bg-[#0f1f4b68] text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Exam History
            </button>
            <button 
              onClick={() => setActiveTab("recordings")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === "recordings" 
                  ? "bg-[#0f1f4b68] text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Recordings
            </button>
          </div>
          
          {/* Tab Title */}
          {activeTab !== "recordings" && (
            <p className="opacity-50 text-sm font-[500] mb-4">
              {activeTab === "candidates" ? "Candidates Scores" : "Exam History"}
            </p>
          )}
          
          {/* Tab Content */}
          {activeTab !== "recordings" ? (
            <div className="rounded-[1.5em] border border-[#343B4F] overflow-hidden py-1 px-1">
              {activeTab === "candidates" ? <CandidateScoresTable /> : <ExamHistoryTable />}
            </div>
          ) : (
            <div className="px-1">
              <RecordingsView />
            </div>
          )}
        </div>
      </Suspense>
    </InstitutionLayout>
  )
}