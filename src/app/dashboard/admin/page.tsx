"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, BookOpen, Award, Activity } from "lucide-react"
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout"
import { StatCard } from "@/components/dashboard/admin/components/stat-card"
import { RecentExamsCard } from "@/components/dashboard/admin/components/recent-exams-card"

// Dashboard stats with proper LucideIcon types
const dashboardStats = [
  {
    title: "Total Exams",
    value: "2",
    icon: BookOpen,
    color: "bg-[#1E3A8A]",
  },
  {
    title: "Active Exams",
    value: "23",
    icon: Activity,
    color: "bg-[#059669]",
  },
  {
    title: "Total Users",
    value: "12",
    icon: Users,
    color: "bg-[#7C3AED]",
  },
  {
    title: "Certificates Issued",
    value: "12",
    icon: Award,
    color: "bg-[#DC2626]",
  },
]

const recentExams = [
  {
    id: 1,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "ongoing" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "completed" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "ongoing" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

function AdminDashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-[#081028]" />
  }

  return (
    <AdminDashboardLayout title="Dashboard" activePage="Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            For, <span className="text-white">Admin</span>
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-fit">
          {dashboardStats.map((stat, index) => (
            <StatCard key={stat.title} data={stat} index={index} />
          ))}
        </div>

        {/* Recent Exams Section */}
        <RecentExamsCard exams={recentExams} />
      </div>
    </AdminDashboardLayout>
  )
}

export default AdminDashboard
