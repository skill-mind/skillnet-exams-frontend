"use client"

import { motion } from "framer-motion"

interface StatusBadgeProps {
  status: string
  type?: "exam" | "ongoing" | "registration"
}

export function StatusBadge({ status, type = "exam" }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "passed":
        return "bg-green-600 text-white"
      case "failed":
        return "bg-red-600 text-white"
      case "ongoing":
        return "bg-blue-600 text-white"
      case "completed":
        return "bg-teal-600 text-white"
      case "in progress":
        return "bg-blue-600 text-white"
      case "scheduled":
        return "bg-blue-500 text-white"
      case "pending":
        return "bg-yellow-600 text-white"
      case "planned":
        return "bg-purple-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}
    >
      {status}
    </motion.span>
  )
}
