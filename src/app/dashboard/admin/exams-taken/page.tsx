"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout"

function ExamsTaken() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-[#081028]" />
  }

  // Mock data for exam history
  const examHistory = [
    {
      id: 1,
      institution: "Institution's Name",
      title: "Examination Name",
      candidates: "Name",
      date: "12th Dec, 2025",
      score: "90/100",
      status: "Passed",
    },
    {
      id: 2,
      institution: "Institution's Name",
      title: "Examination Name",
      candidates: "Name",
      date: "12th Dec, 2025",
      score: "85/100",
      status: "Passed",
    },
    {
      id: 3,
      institution: "Institution's Name",
      title: "Examination Name",
      candidates: "Name",
      date: "12th Dec, 2025",
      score: "39/100",
      status: "Failed",
    },
    {
      id: 4,
      institution: "Institution's Name",
      title: "Examination Name",
      candidates: "Name",
      date: "12th Dec, 2025",
      score: "78/100",
      status: "Passed",
    },
    {
      id: 5,
      institution: "Institution's Name",
      title: "Examination Name",
      candidates: "Name",
      date: "12th Dec, 2025",
      score: "78/100",
      status: "Passed",
    },
  ]

  return (
    <AdminDashboardLayout title="Exams Taken" activePage="Exams-Taken">
      <div className="space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[#AEB9E1] text-sm">Have A Detailed Information About Past Examinations</p>
        </motion.div>

        {/* Exam History Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1A2332] border border-[#2D3748] rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Exam History</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D3748]">
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Institution</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Title</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Candidates</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Date</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Score</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {examHistory.map((exam, index) => (
                  <motion.tr
                    key={exam.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="border-b border-[#2D3748] hover:bg-[#1E2A3A] transition-colors"
                  >
                    <td className="py-4 px-4 text-white">{exam.institution}</td>
                    <td className="py-4 px-4 text-white">{exam.title}</td>
                    <td className="py-4 px-4 text-white">{exam.candidates}</td>
                    <td className="py-4 px-4 text-white">{exam.date}</td>
                    <td className="py-4 px-4 text-white">{exam.score}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exam.status === "Passed" ? "bg-[#10B981] text-white" : "bg-[#EF4444] text-white"
                        }`}
                      >
                        {exam.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AdminDashboardLayout>
  )
}

export default ExamsTaken
