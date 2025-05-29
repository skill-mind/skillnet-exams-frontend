"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout"

function OngoingExams() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-[#081028]" />
  }

  // Mock data for ongoing exams
  const ongoingExams = [
    {
      id: 1,
      institution: "Institution's Name",
      title: "Examination Name",
      candidates: 42,
      date: "12th Dec, 2025",
      startTime: "09:00 AM",
      status: "In Progress",
    },
    {
      id: 2,
      institution: "Global University",
      title: "Final Assessments",
      candidates: 35,
      date: "15th Dec, 2025",
      startTime: "10:00 AM",
      status: "Scheduled",
    },
    {
      id: 3,
      institution: "National Academy",
      title: "Midterm Exams",
      candidates: 50,
      date: "20th Dec, 2025",
      startTime: "11:30 AM",
      status: "Scheduled",
    },
    {
      id: 4,
      institution: "Tech Institute",
      title: "Project Evaluation",
      candidates: 45,
      date: "22nd Dec, 2025",
      startTime: "01:00 PM",
      status: "Pending",
    },
    {
      id: 5,
      institution: "Creative Arts School",
      title: "Portfolio Review",
      candidates: 30,
      date: "25th Dec, 2025",
      startTime: "02:30 PM",
      status: "In Progress",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-[#1FACAA] text-white"
      case "Scheduled":
        return "bg-[#3B82F6] text-white"
      case "Pending":
        return "bg-[#F59E0B] text-white"
      case "Planned":
        return "bg-[#6B7280] text-white"
      default:
        return "bg-[#6B7280] text-white"
    }
  }

  return (
    <AdminDashboardLayout title="Ongoing Exams" activePage="Ongoing-Exams">
      <div className="space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[#AEB9E1] text-sm">Have A Detailed Information About Ongoing Examinations</p>
        </motion.div>

        {/* Ongoing Exams Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1A2332] border border-[#2D3748] rounded-xl p-6"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D3748]">
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Institution</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Title</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Candidates</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Date</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Start Time</th>
                  <th className="text-left py-4 px-4 text-[#AEB9E1] font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ongoingExams.map((exam, index) => (
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
                    <td className="py-4 px-4 text-white">{exam.startTime}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
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

export default OngoingExams
