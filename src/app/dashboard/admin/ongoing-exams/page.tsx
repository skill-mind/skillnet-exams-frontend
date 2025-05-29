"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout"
import { DataTable } from "@/components/dashboard/admin/components/data-table"
import { ongoingExams } from "@/data/admin-mock-data"


function OngoingExams() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-[#081028]" />
  }



  return (
    <AdminDashboardLayout
      title="Ongoing Exams"
      activePage="Ongoing-Exams"
      subtitle="Have A Detailed Information About Ongoing Examinations"
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* Ongoing Exams Table */}
        <DataTable
          columns={[
            { key: "institution", label: "Institution" },
            { key: "title", label: "Title" },
            { key: "candidates", label: "Candidates" },
            { key: "date", label: "Date" },
            { key: "startTime", label: "Start Time" },
            { key: "status", label: "Status" },
            { key: "options", label: ""},
          ]}
          data={ongoingExams}
        />
      </div>
    </AdminDashboardLayout>
  )
}

export default OngoingExams
