"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  data: {
    title: string
    value: string
    icon: LucideIcon
    color: string
  }
  index: number
}

export function StatCard({ data, index }: StatCardProps) {
  const IconComponent = data.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-[#1E3A8A] rounded-lg p-6 border-l-4 border-[#3B82F6]"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <IconComponent className="w-8 h-8 text-white" />
            <span className="text-4xl font-bold text-white">{data.value}</span>
          </div>
          <p className="text-gray-300 text-sm">{data.title}</p>
        </div>
      </div>
    </motion.div>
  )
}
